# Joke Box Slack Bot

Joke Box is a fun slack bot that generates jokes for users to enjoy. Joke Box uses the [Joke API](https://sv443.net/jokeapi/v2/) to generate jokes. Joke Box is a great way to add some humor to your Slack workspace. with Joke Box you can get a random joke from a specific category or get a random joke from all categories. If you would like to use Joke Box in your Slack workspace, you can follow the setup instructions below.

## Setup

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Create a new Slack app on the Slack API website.
4. Create a new bot user for your Slack app.
5. Add the required scopes to your bot user.
6. Install your app to your workspace.
7. In your app's settings, navigate to the "OAuth & Permissions" page and copy the "Bot User OAuth Access Token".
8. Create a `.env` file in the root directory of this project and add the following lines:

```
JOKE_BOX_SLACK_APP_TOKEN=<your Slack app token>
JOKE_BOX_SLACK_BOT_TOKEN=<your Slack bot token>
JOKE_BOX_SLACK_SIGNING_SECRET=<your Slack signing secret>

```

replace `<your Slack app token>` with the "Bot User OAuth Access Token" you copied in step 7, and replace `<your Slack bot token>` with a new bot token you create for your app.
replace `<your Slack signing secret>` with your "Signing Secret".

9. Start the bot by running `npm run build; npm run start`.

## Usage

This bot responds to the following slash commands:

- `/categories`: Display a list of available joke categories.
- `/joke`: Deliver a random joke.
- `/programming_joke`: Deliver a programming-related joke.
- `/dark_joke`: Deliver a joke with a dark sense of humor.
- `/pun_joke`: Deliver a joke that uses wordplay or puns.
- `/miscellaneous_joke`: Deliver a joke that doesn't fit into any other category.

To use the bot, simply type one of the above commands in any Slack channel where the bot is installed. The bot will respond with a joke based on the requested category (or a random joke, in the case of the `/joke` command).
