import CookieStore from "tough-cookie-file-store";
import { CookieJar } from "tough-cookie";
import path from "path";
import _fetch from "node-fetch";
import fetchCookie from "fetch-cookie";
import Headers from "fetch-headers";
import { Stream } from "stream";
import FormData from "form-data";
import streamLength from "stream-length";
import { HOME_DIR } from "./paths";

const fetchWrapper = (jar: CookieJar) => fetchCookie(_fetch, jar);

const PRODUCTION_HOSTNAME = "https://webthi.ng";
const DEVELOPMENT_HOSTNAME = "http://localhost:3001";

export const HOSTNAME =
  process.env.NODE_ENV === "production"
    ? PRODUCTION_HOSTNAME
    : DEVELOPMENT_HOSTNAME;

export const buildUrl = (path: string) => `${HOSTNAME}/api/v1/${path}`;

const COOKIE_STORE_PATH = path.join(
  HOME_DIR || "./",
  process.env.NODE_ENV === "production" ? `.webthingrc` : ".webthingrc-dev"
);

const loadCookieJar = () => new CookieJar(new CookieStore(COOKIE_STORE_PATH));

const fetch = (
  route,
  { headers: _headers = {}, body: _body, file = false, ...otherOptions } = {}
) => {
  let headers = _headers;
  let body = _body;

  if (!file) {
    headers = new Headers(Object.entries(headers || {}));

    headers.append("Content-Type", "application/json");

    if (body && typeof body === "object") {
      body = JSON.stringify(body);
    }
  } else {
    headers = new Headers(Object.entries(headers || {}));
  }

  const jar = loadCookieJar();
  return fetchWrapper(jar)(route, {
    ...otherOptions,
    credentials: "same-origin",
    compress: true,
    redirect: "follow",
    body,
    headers
  }).then(
    (response: Response) => {
      if (response.headers.get("Content-Type").includes("application/json")) {
        return response.json();
      } else {
        return response.text();
      }
    },
    error => {
      console.error(error);
      return {
        success: false,
        error
      };
    }
  );
};

const get = (path: string, options = {}) =>
  fetch(buildUrl(path), { ...options, method: "GET" });
const post = (path: string, options = {}) =>
  fetch(buildUrl(path), { ...options, method: "POST" });
const put = (path: string, options = {}) =>
  fetch(buildUrl(path), { ...options, method: "PUT" });
const deleteRequest = (path: string, options = {}) =>
  fetch(buildUrl(path), { ...options, method: "DELETE" });

export const login = ({ email, password, options = {} }) => {
  return post("/sessions", {
    ...options,
    body: {
      user: {
        email,
        password
      }
    }
  });
};

export const setDevServer = ({ url, options = {} }) => {
  return post("/dev_server", {
    ...options,
    body: {
      url
    }
  });
};

export const clearDevServer = ({ options = {} }) => {
  return deleteRequest("/dev_server", {
    ...options
  });
};

export const getCurrentUser = ({ options }) => {
  return get("/users/me", options);
};

export const isLoggedIn = async () => {
  const resp = await getCurrentUser({ options: {} });

  return typeof resp === "object" && resp.object === "user" ? resp : false;
};

export const uploadPackage = async ({
  tgz,
  options,
  component
}: {
  tgz: Stream;
  options: any;
  component: Object;
}) => {
  const data = new FormData();
  data.append("tarball", tgz, {
    knownLength: await streamLength(tgz)
  });
  data.append("package_json", component);

  return post(`/publish`, {
    ...options,
    headers: { ...data.getHeaders() },
    file: true,
    body: data
  });
};
