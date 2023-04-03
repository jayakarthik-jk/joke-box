// This function returns a structure of the response to be sent to the user for a joke
// It returns a block kit response and has three buttons
// one for getting a new joke, and two for feedback (👍 and 👎)

function jokeResponse(joke: string, category: string, username?: string) {
  return {
    text: "here's a joke for you!",
    blocks: [
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*here's a ${category} joke for you! ${
            username || ""
          }* \n${joke}`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "👍",
              emoji: true,
            },
            action_id: "good_joke",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "👎",
              emoji: true,
            },
            action_id: "bad_joke",
          },
        ],
      },
    ],
  };
}

export default jokeResponse;
