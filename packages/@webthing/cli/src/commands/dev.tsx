// import { loadComponentDevServerForFolder, startServer } from "../lib/devServer";
import { render } from "ink";
import { observable } from "mobx";
import { Provider } from "mobx-react/custom";
import * as React from "react";
import { DevServerComponent } from "../components/DevServer";
import { requireLogin } from "./login";

export function startDevServer(cwd: string) {
  const stores = {
    components: observable.array([])
  };

  const { waitUntilExit } = render(
    <Provider {...stores}>
      <DevServerComponent cwd={cwd} />
    </Provider>
  );

  return waitUntilExit();
}

export async function devCommand(cwd: string) {
  await requireLogin();

  await startDevServer(cwd);
  // await startServer();
  // await loadComponentDevServerForFolder(cwd);
}
