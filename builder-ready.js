import * as Bolt from "./bundle-core/bolt-core.mjs";
import "./css/bolt-core.css";

if (!window.__boltBuilderInitialized && typeof Bolt.initialize === "function") {
  Bolt.initialize();
  window.__boltBuilderInitialized = true;
}

export * from "./bundle-core/bolt-core.mjs";