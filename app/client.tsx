/// <reference types="vinxi/types/client" />

// Now we need a way to hydrate our client-side JavaScript once the route resolves to
// the client. We do this by piping the same router information to our client entry point:
// This enables us to kick off client-side routing once the user's initial server request has fulfilled.

import { StartClient } from "@tanstack/start";
import { hydrateRoot } from "react-dom/client";
import { createRouter } from "./router";

const router = createRouter();

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

hydrateRoot(root, <StartClient router={router} />);
