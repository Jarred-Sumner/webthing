// import { loadComponentDevServerForFolder, startServer } from "../lib/devServer";
import { render } from "ink";
import { observable } from "mobx";
import { Provider } from "mobx-react/custom";
import * as React from "react";
import { TemplateDevServerComponent } from "../../components/TemplateDevServer";
import { requireLogin } from "../login";
import { WebthingTemplateStore } from "../../lib/WebthingTemplate";
import ora from "ora";

export async function startDevServer(cwd: string) {
  const spinner = ora(`Loading dev server...`).start();

  const stores = {
    template: await WebthingTemplateStore.load(cwd, "dev", null, null)
  };

  spinner.stop();

  const { waitUntilExit } = render(
    <Provider {...stores}>
      <TemplateDevServerComponent cwd={cwd} />
    </Provider>
  );

  return waitUntilExit();
}

export async function templateDevCommand(cwd: string) {
  await requireLogin();

  await startDevServer(cwd);
  // await startServer();
  // await loadComponentDevServerForFolder(cwd);
}
