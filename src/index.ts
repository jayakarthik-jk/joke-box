import env from "dotenv";
import { App } from "@slack/bolt";
import listeners from "./listeners";

async function init() {
  env.config();

  const app = new App({
    token: process.env.JOKE_BOX_SLACK_BOT_TOKEN,
    appToken: process.env.JOKE_BOX_SLACK_APP_TOKEN,
    signingSecret: process.env.JOKE_BOX_SLACK_SIGNING_SECRET,
    socketMode: true,
  });

  listeners(app);

  const PORT = process.env.PORT || 3000;
  await app.start(PORT);
  console.log(`App is running on port ${PORT}`);
}

init();
