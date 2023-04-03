import { App } from "@slack/bolt";
import categoryListResponse from "../responses/categoryList";

// listener for all the events
// this function register all the listeners for the events
// if the event is "member_joined_channel" it displays a greeting message saying "Welcome to the channel"
// if the event is "app_mention" it displays a greeting message saying "hey"
// if the event is "message" it displays a greeting message

function eventListeners(app: App) {
  // listening to the event of user joining channel
  const greeting =
    "this is Joke Box, you can ask me for a joke by typing /joke";

  app.event("member_joined_channel", async ({ say, event }) => {
    await say(
      categoryListResponse(
        `Welcome to the channel <@${event.user}>! \n${greeting}`
      )
    );
  });

  // listening to the event of user mentioning the bot
  app.event("app_mention", async ({ say, event }) => {
    await say(categoryListResponse(`hey <@${event.user}>, ${greeting}`));
  });

  // listening to the event of user sending a direct message to the bot
  app.event("message", async ({ say, event }) => {
    if (event.channel_type === "im") {
      await say(categoryListResponse(greeting));
    }
  });
}

export default eventListeners;
