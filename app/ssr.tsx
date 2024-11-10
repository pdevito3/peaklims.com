/// <reference types="vinxi/types/server" />

// As TanStack Start is an SSR framework, we need to pipe this router information to our server entry point:

import { getRouterManifest } from "@tanstack/start/router-manifest";
import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/start/server";

import { createRouter } from "./router";

export default createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler);
