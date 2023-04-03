import jokesCategories from "../services/jokesCategories.json";

// it returns the structure of the response to be sent to the user when the dislike button is clicked
// and displays the categories of jokes to choose from
function badJokeResponse() {
  return {
    text: "sorry for that!",
    blocks: [
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*sorry for that* \nhere are some other categories",
        },
      },
      {
        type: "divider",
      },
      {
        type: "actions",
        elements: jokesCategories.map((category) => ({
          type: "button",
          text: {
            type: "plain_text",
            text: category,
            emoji: true,
          },
          action_id: `${category.toLowerCase()}_joke`,
        })),
      },
    ],
  };
}

export default badJokeResponse;
