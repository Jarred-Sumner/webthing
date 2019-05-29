import React from "react";
import { render, Color, Box, Text } from "ink";
import TextInput from "ink-text-input";
import Spinner from "ink-spinner";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import { login, isLoggedIn, getCurrentUser, sendLoginLink } from "../lib/api";
import { WEBTHING_BIN } from "../lib/paths";

type Props = {
  onSuccess: () => void;
};

type State = {
  email: string;
  loginCode: string;
  message: string | null;
  step:
    | "email"
    | "sendingLoginCode"
    | "enterLoginCode"
    | "verifyingLoginCode"
    | "success";
};

export class LoginComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      loginCode: "",
      message: null,
      step: "email"
    };
  }

  handleSendLoginCode = () => {
    this.setState({ step: "verifyingLoginCode" }, async () => {
      const response = await login({
        email: this.state.email,
        login_token: this.state.loginCode
      });

      if (
        typeof response === "object" &&
        typeof response.object === "string" &&
        response.object === "user"
      ) {
        this.setState({ step: "success" }, () => {
          this.props.onSuccess && this.props.onSuccess();
        });
      } else {
        this.setState({
          message:
            (typeof response === "object" && response.message) ||
            "Please enter the login code and try again",
          step: "email",
          email: "",
          loginCode: ""
        });
      }
    });
  };

  handleChangeEmail = email => this.setState({ email });
  handleChangeLoginCode = loginCode => this.setState({ loginCode });
  handleFocusLoginCode = () => this.setState({ step: "enterLoginCode" });
  handleGenerateLoginCode = () =>
    this.setState({ step: "sendingLoginCode" }, async () => {
      const response = await sendLoginLink({
        email: this.state.email
      });

      if (typeof response === "object" && response.success) {
        this.setState({ step: "enterLoginCode" });
      } else {
        this.setState({
          message:
            (typeof response === "object" && response.message) ||
            "Please re-enter your email or username and try again",
          step: "email",
          email: "",
          loginCode: ""
        });
      }
    });

  render() {
    const { step, email, loginCode, message } = this.state;

    if (step === "email") {
      return (
        <Box flexDirection="column">
          <Text>
            {message ? (
              <Color white>{message}</Color>
            ) : (
              <Gradient name="rainbow">
                <Text>Login to webthing</Text>
              </Gradient>
            )}
          </Text>
          <Box>
            <Color blue>&gt;</Color> Enter your email:{" "}
            <TextInput
              onSubmit={this.handleGenerateLoginCode}
              value={email}
              showCursor
              onChange={this.handleChangeEmail}
            />
          </Box>
        </Box>
      );
    } else if (step === "sendingLoginCode") {
      return (
        <Box flexDirection="column">
          <Box>
            <Color gray>
              <Spinner type="dots" />
            </Color>
            {" Sending login code..."}
          </Box>
        </Box>
      );
    } else if (step === "enterLoginCode") {
      return (
        <Box flexDirection="column">
          {message && <Color white>{message}</Color>}
          <Text>
            We sent an email to{" "}
            <Color blueBright bgBlackBright bold>
              {email}
            </Color>
            . Please enter or copy paste the login code from the email.
          </Text>
          <Box marginTop={1}>
            <Box>
              <Text>
                <Color gray>&gt;</Color> Login code:{" "}
              </Text>
            </Box>
            <TextInput
              onSubmit={this.handleSendLoginCode}
              value={loginCode}
              showCursor
              onChange={this.handleChangeLoginCode}
            />
          </Box>
        </Box>
      );
    } else if (step === "verifyingLoginCode") {
      return (
        <Box flexDirection="column">
          <Box>
            <Color green>
              <Spinner type="dots" />
            </Color>
            {" Logging in"}
          </Box>
        </Box>
      );
    } else if (step === "success") {
      return (
        <Box>
          <Color green>Logged in successfully</Color>
        </Box>
      );
    }
  }
}

export function loginCommand() {
  const { unmount } = render(
    <LoginComponent onSuccess={() => setTimeout(unmount, 1)} />
  );
}

export const requireLogin = () => {
  return new Promise(async (resolve, reject) => {
    const user = await isLoggedIn();

    if (user) {
      resolve(user);
      return;
    } else {
      const child = require("child_process").fork(WEBTHING_BIN, ["login"], {
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
    }
  });
};
