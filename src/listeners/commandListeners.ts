import { App } from "@slack/bolt";
import jokesCategories from "../services/jokesCategories.json";
import Jokes from "../services/jokes";
import categoryListResponse from "../responses/categoryList";

// listener for all the commands
// this function register all the listeners for the commands
// if the command is "/joke" it calls the Jokes.random() function to get a joke and then displays it
// else it calls the Jokes.byCategory() function to get a joke from the category and then displays it
function commandListeners(app: App) {
  // register the listener for the "/joke" command
  app.command("/joke", async ({ ack, say, payload }) => {
    await ack();

    const username = `<@${payload.user_id}>`;
    const joke = await Jokes.random(username);

    await say(joke);
  });

  // register the listener for the "/categories" command
  app.command("/categories", async ({ ack, say }) => {
    await ack();

    say(categoryListResponse());
  });

  // register the listener for the "/categories" command
  for (const category of jokesCategories) {
    const cmd = `/${category.toLowerCase()}_joke`;
    app.command(cmd, async ({ ack, say, payload }) => {
      await ack();

      const username = `<@${payload.user_id}>`;
      const joke = await Jokes.byCategory(category, username);

      await say(joke);
    });
  }
}

export default commandListeners;
