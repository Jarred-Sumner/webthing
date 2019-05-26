import React from "react";
import { render, Color, Box, Text } from "ink";
import TextInput from "ink-text-input";
import Spinner from "ink-spinner";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import { login, isLoggedIn, getCurrentUser } from "../lib/api";
import { WEBTHING_BIN } from "../lib/paths";

type Props = {
  onSuccess: () => void;
};

type State = {
  email: string;
  password: string;
  message: string | null;
  step: "email" | "password" | "login" | "success";
};

export class LoginComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: null,
      step: "email"
    };
  }

  handleChangeEmail = email => this.setState({ email });
  handleChangePassword = password => this.setState({ password });
  handleFocusPassword = () => this.setState({ step: "password" });
  handleLogin = () =>
    this.setState({ step: "login" }, async () => {
      const response = await login({
        email: this.state.email,
        password: this.state.password
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
            "Please enter your email/password and try again",
          step: "email",
          email: "",
          password: ""
        });
      }
    });

  render() {
    const { step, email, password, message } = this.state;

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
              onSubmit={this.handleFocusPassword}
              value={email}
              showCursor
              onChange={this.handleChangeEmail}
            />
          </Box>
        </Box>
      );
    } else if (step === "password") {
      return (
        <Box flexDirection="column">
          {message ? (
            <Color white>{message}</Color>
          ) : (
            <Gradient name="rainbow">
              <Text>Login to webthing</Text>
            </Gradient>
          )}
          <Box>
            <Text>
              <Color blue>&gt;</Color> Enter your password:{" "}
            </Text>
            <TextInput
              onSubmit={this.handleLogin}
              value={password}
              showCursor
              mask="*"
              onChange={this.handleChangePassword}
            />
          </Box>
        </Box>
      );
    } else if (step === "login") {
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
