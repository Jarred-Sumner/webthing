import React from "react";
import scriptjs from "scriptjs";
import * as ReactIs from "react-is";

export const getModule = (moduleName: string) => {
  const mod = window[moduleName];

  if (ReactIs.isValidElementType(mod)) {
    return mod;
  } else if (
    typeof mod === "object" &&
    ReactIs.isValidElementType(mod.default)
  ) {
    return mod.default;
  } else if (
    typeof mod === "object" &&
    ReactIs.isValidElementType(mod[moduleName])
  ) {
    return mod[moduleName];
  } else {
    return null;
  }
};

export const loadScript = (url: string) => {
  return new Promise((resolve, reject) => {
    try {
      scriptjs(url, () => resolve(), () => reject());
    } catch (exception) {
      reject(exception);
    }
  });
};

export const loadAndEvalScript = (url: string, moduleName: string) => {
  return loadScript(url).then(() => {
    return getModule(moduleName);
  }, console.error);
};

type Props = {
  moduleName: string;
  innerRef: Function | React.Ref<any>;
  children: React.ReactNode;
  src: string;
  componentProps: Object;

  wrapperTagName: "div" | "span";
};

type State = {
  status: "loading" | "completed" | "error";
  error: Error | null;
};

export class ComponentLoader extends React.Component<Props, State> {
  Component: React.ComponentType<any>;

  constructor(props: Props) {
    super(props);

    if (props.src) {
      this.Component = getModule(props.moduleName);
    }

    this.state = {
      status: this.Component ? "completed" : "loading",
      error: null
    };
  }

  componentDidMount() {
    if (this.state.status === "loading") {
      this.loadComponent(false);
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.src !== this.props.src &&
      this.props.src &&
      this.state.status !== "completed"
    ) {
      this.loadComponent(true);
    }
  }

  componentDidCatch(error: Error) {
    console.error(`[${this.props.moduleName}]`, error);
    this.setState({
      status: "error"
    });
  }

  static getDerivedStateFromError(_error: Error) {
    return {
      status: "error"
    };
  }

  loadComponent = (cacheBust: boolean = false) => {
    if (!this.props.src) {
      return;
    }

    return loadAndEvalScript(
      cacheBust
        ? this.props.src + `?d=${new Date().getTime()}`
        : this.props.src,
      this.props.moduleName
    ).then(
      Component => {
        this.Component = Component;
        this.setState({ status: "completed", error: null });
      },
      exception => {
        console.error(exception);
        this.setState({ error: exception, status: "error" });
      }
    );
  };

  render() {
    const { status } = this.state;
    const { Component } = this;

    if (status === "completed") {
      return (
        <Component ref={this.props.innerRef} {...this.props.componentProps}>
          {this.props.children}
        </Component>
      );
    } else {
      return React.createElement(
        this.props.wrapperTagName,
        { ref: this.props.innerRef },
        this.props.children
      );
    }
  }
}
