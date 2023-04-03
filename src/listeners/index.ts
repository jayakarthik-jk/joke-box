import { App } from "@slack/bolt";

import eventListeners from "./eventListeners";
import commandListeners from "./commandListeners";
import actionListeners from "./actionListeners";

// register the listeners for the events, commands and actions
function listeners(app: App) {
  actionListeners(app);
  commandListeners(app);
  eventListeners(app);
}

export default listeners;
