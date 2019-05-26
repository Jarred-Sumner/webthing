import cors from "cors";
import debug from "debug";
import getPort from "get-port";
import localtunnel from "localtunnel";
import { clearDevServer, setDevServer } from "./api";

const connectToLocalTunnel = (port: number) => {
  return new Promise((resolve, reject) => {
    localtunnel(port, (err, _tunnel) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(_tunnel);
      }
    });
  });
};

const RETRY_DELAY = 50;
const RETRY_COUNT = 3;
const connectToLocalTunnelWithRetries = async (
  port: number,
  retryCount: number = 0,
  maxRetryCount = RETRY_COUNT
) => {
  try {
    return await connectToLocalTunnel(port);
  } catch (exception) {
    if (process.env.NODE_ENV === "development") {
      debug(exception);
    }
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve(
            connectToLocalTunnelWithRetries(port, retryCount + 1, maxRetryCount)
          ),
        RETRY_DELAY
      );
    });
  }
};

export async function startServer() {
  const app = require("express")();
  const server = require("http").Server(app);
  const io = require("socket.io")(server, {
    serveClient: false
  });
  let tunnel;

  app.use(cors());

  const port = await getPort({ port: Number(process.env.PORT || 49374) });

  return new Promise(async (resolve, reject) => {
    server.listen(port, async () => {
      // tunnel = await connectToLocalTunnelWithRetries(port, 0);
      tunnel = { url: `http://127.0.0.1:${port}` };
      await setDevServer({ url: tunnel.url, options: {} });

      process.once("beforeExit", () => {
        clearDevServer({});
      });

      resolve([app, io, tunnel]);
    });
  });
}
