import { App } from "@slack/bolt";

import Jokes from "../services/jokes";
import goodJoke from "../responses/goodJoke";
import badJoke from "../responses/badJoke";
import jokesCategories from "../services/jokesCategories.json";

// listener for all the action buttons
// if the button is "one_more" it calls the Jokes.random() function to get a joke and then displays it
// if the button is "good" it displays a message saying "glad you liked it"
// if the button is "bad" it displays a message saying "sorry to hear that"
// if the button is "send_off" it display a message saying "see you later!, bye!"
// else it calls the Jokes.byCategory() function to get a joke from the category and then displays it

function actionListeners(app: App) {
  app.action("one_more", async ({ ack, say, body }) => {
    await ack();
    const joke = await Jokes.random(`<@${body.user.id}>`);
    await say(joke);
  });

  // when user give 👍 to a joke
  app.action("good_joke", async ({ ack, say }) => {
    await ack();
    await say(goodJoke());
  });

  // when user give 👎 to a joke
  app.action("bad_joke", async ({ ack, say }) => {
    await ack();
    await say(badJoke());
  });

  // when user say No😔 to another joke
  app.action("send_off", async ({ ack, say }) => {
    await ack();
    await say("see you later!, bye!");
  });

  // when user select a category from the list
  for (const categories of jokesCategories) {
    app.action(
      `${categories.toLowerCase()}_joke`,
      async ({ ack, say, body }) => {
        await ack();
        const joke = await Jokes.byCategory(categories, `<@${body.user.id}>`);
        await say(joke);
      }
    );
  }
}

export default actionListeners;
