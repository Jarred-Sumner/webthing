import chalk from "chalk";
import { Box, Color, render, Text } from "ink";
import SelectInput from "ink-select-input";
import TextInput from "ink-text-input";
import fs from "fs-extra";
import _fs from "fs";
import {
  camelCase,
  kebabCase,
  fromPairs,
  startCase,
  trim,
  upperFirst
} from "lodash";
import path from "path";
import React from "react";
import { openInEditor } from "../lib/openInEditor";
import { jsFileName, packageJSFilename } from "../lib/packageUtils";
import {
  WEBTHING_BIN,
  CLI_ROOT,
  WEBTHING_BIN_FILENAME
} from "../lib/paths";
import { requireLogin } from "./login";
import fg from "fast-glob";
import { isLoggedIn } from "../lib/api";

type Choice = "block" | "inline";

const BOILERPLATE_PATH = path.resolve(CLI_ROOT, "boilerplate");

const BLOCK_COMPONENT_BOILERPLATE_PATH = path.join(
  BOILERPLATE_PATH,
  "block-component"
);

const INLINE_COMPONENT_BOILERPLATE_PATH = path.join(
  BOILERPLATE_PATH,
  "inline-component"
);

const TEMPLATE_BOILERPLATE_PATH = path.join(BOILERPLATE_PATH, "template");

type Replacements = { [key: string]: string };
const stringWithReplacements = (
  content: string,
  replacements: Replacements
) => {
  let _content = content;
  Object.keys(replacements).forEach((key: string) => {
    _content = _content.split(key).join(replacements[key]);
  });
  return _content;
};

function generateBoilerplate(
  _name: string,
  folder: string,
  username: string,
  destination: string
) {
  const name = upperFirst(camelCase(_name));
  const title = startCase(_name);

  const replacements = {
    "{{name}}": kebabCase(name),
    "{{title}}": title,
    "{{bin}}": WEBTHING_BIN_FILENAME,
    "{{titleCase}}": name,
    "{{username}}": username,
    "{{webthingVersion}}": require("@webthing/core/package.json").version,
    "{{packageJSPath}}": path.join(destination, packageJSFilename(_name))
  };

  const files = fg.sync(folder + "/**/*").map(file => {
    let filename = file;

    if (/component\.package\.js$/.test(file.toString())) {
      filename = packageJSFilename(name);
    } else if (/component\.js$/.test(file.toString())) {
      filename = jsFileName(name);
    }

    const text = stringWithReplacements(
      fs.readFileSync(file.toString(), "utf8"),
      replacements
    );

    return [filename.replace(TEMPLATE_BOILERPLATE_PATH, _name), text];
  });

  return fromPairs(files);
}

export function saveTemplateBoilerplate(
  _name: string,
  destination: string,
  username: string
) {
  const files = generateBoilerplate(
    _name,
    TEMPLATE_BOILERPLATE_PATH,
    username,
    destination
  );

  return Object.keys(files).map(fileName => {
    const abs = path.join(destination, fileName);

    const dir = path.dirname(abs);

    if (!fs.pathExistsSync(dir)) {
      fs.mkdirpSync(dir);
      console.log(chalk.keyword("black").bgGreen("MKDIR"), dir);
    }

    fs.writeFileSync(abs, files[fileName], {
      encoding: "utf8",
      flag: "w"
    });

    console.log(chalk.keyword("black").bgGreen("WROTE"), abs);

    return abs;
  });
}

export function saveBlockComponentBoilerplate(
  _name: string,
  destination: string,
  username: string
) {
  const files = generateBoilerplate(
    _name,
    BLOCK_COMPONENT_BOILERPLATE_PATH,
    username,
    destination
  );

  return Object.keys(files).map(fileName => {
    const abs = path.join(destination, fileName);
    fs.writeFileSync(abs, files[fileName], {
      encoding: "utf8",
      flag: "w"
    });

    console.log(chalk.keyword("black").bgGreen("WROTE"), abs);

    return abs;
  });
}

export function saveInlineComponentBoilerplate(
  _name: string,
  destination: string,
  username: string
) {
  const files = generateBoilerplate(
    _name,
    INLINE_COMPONENT_BOILERPLATE_PATH,
    username,
    destination
  );

  return Object.keys(files).map(fileName => {
    const abs = path.join(destination, fileName);
    fs.writeFileSync(abs, files[fileName], {
      encoding: "utf8",
      flag: "w"
    });

    console.log(chalk.keyword("green")("Wrote"), abs);

    return abs;
  });
}

type Props = {
  defaultName: string | null;
  onSelect: (choice: Choice, name: string) => void;
};

type State = {
  choice: Choice;
  step: "name" | "choice";
  name: string;
};

class BoilerplatePicker extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      name: props.defaultName || "",
      step: "name",
      choice: "block"
    };
  }

  handleChangeName = (name: string) => this.setState({ name });
  handleSetStepToChoice = () => {
    const { name } = this.state;
    if (trim(name).length > 0) {
      this.setState({ step: "choice" });
    }
  };

  handleSubmitChoice = ({ value }: { value: Choice }) => {
    this.props.onSelect(value, this.state.name);
  };

  render() {
    const { step, choice, name } = this.state;

    if (step === "name") {
      return (
        <Box>
          <Text>
            <Color gray>&gt;&nbsp;</Color>
            <Color white>Enter component name:</Color>&nbsp;
          </Text>
          <Text bold>
            <TextInput
              value={name}
              placeholder="My cool component"
              showCursor
              onSubmit={this.handleSetStepToChoice}
              onChange={this.handleChangeName}
            />
          </Text>
        </Box>
      );
    } else if (step === "choice") {
      return (
        <Box flexDirection="column">
          <Box>
            <Box>
              <Text>
                <Color gray>&gt;&nbsp;</Color>
                <Color gray>Enter component name:</Color>&nbsp;
              </Text>
            </Box>
            <Text bold={false}>{name}</Text>
          </Box>

          <Text>
            <Color gray>&gt;&nbsp;</Color>
            <Text bold>
              <Color white>What kind?</Color>&nbsp;
            </Text>
          </Text>

          <SelectInput
            items={[
              {
                label: "Block  – wraps an entire line.",
                value: "block"
              },
              {
                label: "Inline – text inside a line",
                value: "inline"
              }
            ]}
            onSelect={this.handleSubmitChoice}
            initialIndex={0}
          />
        </Box>
      );
    }
  }
}

const getNameAndChoice = (defaultName: string | null): Promise<any> => {
  return new Promise(resolve => {
    const { unmount } = render(
      <BoilerplatePicker
        defaultName={defaultName || null}
        onSelect={(choice, name) => {
          unmount();
          resolve([choice, name]);
        }}
      />
    );
  });
};

export async function newCommand(
  defaultName: string | null,
  destination: string | null,
  autoOpen: boolean
) {
  const user = await requireLogin();

  const _destination = destination || __dirname;

  const [choice, name] = await getNameAndChoice(defaultName);

  let files;

  if (choice === "block") {
    files = saveBlockComponentBoilerplate(
      name,
      _destination,
      user.blog.subdomain
    );
  } else if (choice === "inline") {
    files = saveInlineComponentBoilerplate(
      name,
      _destination,
      user.blog.subdomain
    );
  }

  if (autoOpen) {
    await Promise.all([openInEditor(files[1]), openInEditor(files[0])]).then(
      ok => {},
      _doNothing => {}
    );
  }

  return new Promise((resolve, reject) => {
    const child = require("child_process").fork(WEBTHING_BIN, ["dev"], {
      cwd: process.cwd(),
      env: process.env,
      detached: false,
      encoding: "utf-8"
    });

    child.on("exit", async () => {
      const user = await isLoggedIn();

      if (!user) {
        reject();
        return;
      }

      resolve(user);
    });
  });
}

export async function newTemplateCommand(
  name: string,
  destination: string | null
) {
  const user = await requireLogin();

  const _destination = destination || __dirname;

  saveTemplateBoilerplate(
    name.startsWith(".") ? path.relative(__dirname, name) : name,
    _destination,
    user.blog.subdomain
  );

  console.log("");
  console.log("Created your new template in", path.join(destination, name));
  console.log("To get started, run the following command:");
  console.log("");

  console.log(`cd \"${name}\" && yarn dev`);
}
