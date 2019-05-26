import React from "react";
export declare const getModule: (moduleName: string) => any;
export declare const loadScript: (url: string) => Promise<{}>;
export declare const loadAndEvalScript: (
  url: string,
  moduleName: string
) => Promise<any>;
declare type Props = {
  moduleName: string;
  innerRef: Function | React.Ref<any>;
  children: React.ReactNode;
  src: string;
  componentProps: Object;
  wrapperTagName: "div" | "span";
};
declare type State = {
  status: "loading" | "completed" | "error";
  error: Error | null;
};
export declare class ComponentLoader extends React.Component<Props, State> {
  Component: React.ComponentType<any>;
  constructor(props: Props);
  componentDidMount(): void;
  componentDidUpdate(prevProps: Props): void;
  componentDidCatch(error: Error): void;
  static getDerivedStateFromError(
    _error: Error
  ): {
    status: string;
  };
  loadComponent: (cacheBust?: boolean) => Promise<void>;
  render(): JSX.Element;
}
export {};
