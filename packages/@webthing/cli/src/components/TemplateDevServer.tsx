import express from "express";
import fs from "fs";
import { Box, Color, Static, Text } from "ink";
import Link from "ink-link";
import Spinner from "ink-spinner";
import { memoize, throttle } from "lodash";
import { inject, observer } from "mobx-react/custom";
import moment from "moment";
import path, { join } from "path";
import * as React from "react";
import { startServer } from "../lib/devServer";
import { WEBTHING_ROOT } from "../lib/paths";
import {
  BuildStatus,
  LogLevel,
  WebthingTemplate
} from "../lib/WebthingTemplate";

type DevComponentProps = {
  component: WebthingTemplate;
  log: any;
  cwd: string;
};

const PRODUCTION_HOSTNAME = "https://webthi.ng";
const DEVELOPMENT_HOSTNAME = "http://localhost:3000";

const HOSTNAME =
  process.env.NODE_ENV === "development"
    ? DEVELOPMENT_HOSTNAME
    : PRODUCTION_HOSTNAME;
const EDITOR_URL = HOSTNAME + "/write";

class _DevComponentStatus extends React.Component<DevComponentProps> {
  renderPaths() {
    const { component, cwd } = this.props;

    const { codePath, manifestPath } = component;
    const componentStatus = component.templateStatus;
    const manifestStatus = component.manifestStatus;

    return (
      <Color gray>
        <Box textWrap="truncate" flexDirection="column">
          <Box flexDirection="row">
            <Text>{componentStatus === BuildStatus.failed ? ":(" : "->"}</Text>
            <Box marginLeft={1}>
              <Text>{path.relative(cwd, codePath)}</Text>
            </Box>
          </Box>
          <Box flexDirection="row">
            <Text>{manifestStatus === BuildStatus.failed ? ":(" : "->"}</Text>
            <Box marginLeft={1}>
              <Text>{path.relative(cwd, manifestPath)}</Text>
            </Box>
          </Box>
        </Box>
      </Color>
    );
  }
  render() {
    const { component } = this.props;

    const buildStatus = component.buildStatus;

    if (buildStatus === BuildStatus.compiling) {
      return (
        <Box flexDirection="column">
          <Box flexDirection="row">
            <Box width={6}>
              <Color white>
                <Spinner type="dots" />
              </Color>
            </Box>
            <Text>Compiling {component.packageName}</Text>
          </Box>
          {this.renderPaths()}
        </Box>
      );
    } else if (buildStatus === BuildStatus.converting) {
      return (
        <Box flexDirection="column">
          <Box flexDirection="row">
            <Box width={6}>
              <Color white>
                <Spinner type="dots" />
              </Color>
            </Box>
            <Text>Building package.json for {component.packageName}</Text>
          </Box>
          {this.renderPaths()}
        </Box>
      );
    } else if (buildStatus === BuildStatus.saving) {
      return (
        <Box flexDirection="column">
          <Box flexDirection="row">
            <Box width={6}>
              <Color white>
                <Spinner type="dots" />
              </Color>
            </Box>
            <Text>Saving files for {component.packageName}</Text>
          </Box>
          {this.renderPaths()}
        </Box>
      );
    } else if (buildStatus === BuildStatus.success) {
      return (
        <Box flexGrow={1} flexDirection="column">
          <Box flexGrow={1} flexDirection="row">
            <Box width={6}>
              <Color bold bgGreen black>
                <Text>BUILT</Text>
              </Color>
            </Box>

            <Box flexGrow={1} justifyContent="space-between">
              <Text bold>{component.packageName}</Text>

              <Box marginLeft={2}>
                <Color gray>
                  <Text>
                    {moment(component.component.lastUpdated).format("LTS")}
                  </Text>
                </Color>
              </Box>
            </Box>
          </Box>
          {this.renderPaths()}
        </Box>
      );
    } else if (buildStatus === BuildStatus.failed) {
      return (
        <Box flexDirection="column">
          <Box flexDirection="row">
            <Color bgRed black>
              <Box width={6}>
                <Color bold red>
                  <Text>ERROR</Text>
                </Color>
              </Box>
            </Color>

            <Box flexGrow={1} justifyContent="space-between">
              <Text bold>{component.packageName}</Text>

              <Box marginLeft={2}>
                <Color gray>
                  <Text>
                    {moment(component.component.lastUpdated).format("LTS")}
                  </Text>
                </Color>
              </Box>
            </Box>
          </Box>
          {this.renderPaths()}
        </Box>
      );
    } else {
      return null;
    }
  }
}

const DevComponentStatus = observer(_DevComponentStatus);

const getVersion = memoize(() => {
  const { version } = JSON.parse(
    fs.readFileSync(join(WEBTHING_ROOT, "./package.json"), "utf8")
  );

  return version;
});

enum DevServerStep {
  starting_server,
  loading_components,
  ready
}

type LogLine = {
  text: string;
  level: LogLevel;
  packageName: string;
};

type State = {
  step: DevServerStep;
  isEditorConnected: boolean;
  logLines: Array<LogLine>;
  components: Array<WebthingTemplate>;
};

class RawTemplateDevServerComponent extends React.Component<
  { cwd: string },
  State
> {
  server: Express.Application | null = null;
  socket: SocketIO.Socket | null = null;
  tunnel: {
    url: string;
  } | null = null;

  constructor(props) {
    super(props);

    props.template.log = this.handleLog;
    props.template.onUpdate = this.sendComponentUpdate;

    this.state = {
      step: DevServerStep.starting_server,
      isEditorConnected: false,
      logLines: [],
      components: []
    };
  }

  getTemplate = () => {
    const { template } = this.props;

    const { srcPath, id } = template;

    return {
      ...template.registration.toJSON(),
      isDevelopment: true,
      isRemote: true,
      src: [srcPath, "/template.js"].join("/")
    };
  };

  componentDidMount() {
    this.start();
  }

  handleLog = (text: string, level: LogLevel, packageName: string) => {
    this.setState({
      logLines: [
        ...this.state.logLines,
        { text, level, id: Math.random().toString(), packageName }
      ]
    });
  };

  sendComponentUpdate = throttle(
    (id: string) => {
      this.socket.emit("template", this.getTemplate());
    },
    5,
    { leading: false }
  );

  start = async () => {
    this.handleLog("Starting dev server...", LogLevel.debug, "Webthing");
    const [server, socket, tunnel] = await startServer();
    this.server = server;
    this.socket = socket;
    this.tunnel = tunnel;

    server.get("/template", (_req, res) => {
      res.send(this.getTemplate());
    });

    server.get("/version", (_req, res) => {
      res.send({
        version: getVersion()
      });
    });

    this.handleLog("Started dev server!", LogLevel.info, "Webthing");

    this.setState({ step: DevServerStep.loading_components });

    process.on("unhandledRejection", console.error);

    this.server.use(
      `/template/dist`,
      express.static(this.props.template.buildPath)
    );

    this.setState(
      {
        step: DevServerStep.ready
      },
      () => {
        socket.on("connection", client => {
          client.emit("template", this.getTemplate());

          this.setState({ isEditorConnected: true });

          client.on("disconnect", () => {
            this.setState({ isEditorConnected: false });
          });

          client.on("message", ({ url: editorURL }) => {
            if (editorURL) {
              this.handleLog(
                `Connected to editor at ${editorURL}`,
                LogLevel.success,
                "Webthing"
              );
              this.setState({ editorURL });
            }
          });
        });
        socket.emit("template", this.getTemplate());

        socket.on("template", () =>
          socket.emit("template", this.getTemplate())
        );
      }
    );
  };

  render() {
    const { logLines, store, isEditorConnected, step, editorURL } = this.state;
    const { cwd } = this.props;

    const boxWidth = 20;
    return (
      <Box flexGrow={1} flexDirection="column">
        <Static>
          {logLines.reverse().map(line => (
            <Box key={line.id} textWrap="wrap" flexDirection="row">
              <Color gray={line.level === LogLevel.debug}>
                <Box
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  width={boxWidth}
                >
                  <Color
                    red={line.level === LogLevel.error}
                    greenBright={line.level === LogLevel.success}
                    white={line.level === LogLevel.info}
                    gray={line.level === LogLevel.debug}
                  >
                    [{line.packageName}]
                  </Color>
                </Box>

                <Text>{line.text}</Text>
              </Color>
            </Box>
          ))}
        </Static>
        <Box marginTop={2}>
          {step === DevServerStep.ready && (
            <Box flexGrow={1} flexDirection="column">
              <Text>----</Text>
              <DevComponentStatus
                log={this.handleLog}
                key={`${this.props.template.id}`}
                component={this.props.template}
                cwd={cwd}
              />
              <Text>----</Text>
              {isEditorConnected ? (
                <Box flexDirection="column">
                  <Box flexDirection="row">
                    <Box marginRight={1} width={9}>
                      <Color bgGreen black>
                        <Text>CONNECTED</Text>
                      </Color>
                    </Box>

                    <Box>
                      <Text>
                        {editorURL || "Webthing Editor is connected."}
                      </Text>
                    </Box>
                  </Box>
                  <Box>
                    <Color gray>
                      <Text>-> Hot Module Reloading is enabled :)</Text>
                    </Color>
                  </Box>
                </Box>
              ) : (
                <Box flexDirection="column">
                  <Box flexDirection="row">
                    <Box width={9}>
                      <Color bgYellow black>
                        <Text>WAITING</Text>
                      </Color>
                    </Box>

                    <Link url={EDITOR_URL}>
                      <Text>
                        Open Webthing's editor at https://webthi.ng/write
                      </Text>
                    </Link>
                  </Box>
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Box>
    );
  }
}

export const TemplateDevServerComponent = inject("template")(
  observer(RawTemplateDevServerComponent)
);
