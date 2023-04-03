import jokesCategories from "../services/jokesCategories.json";

// it returns the structure of the response to be sent to the user
// for displaying the categories of jokes to choose from
function categoryListResponse(text?: string) {
  return {
    text: "here are the jokes categories",
    blocks: [
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `${text || ""} \n*here are the jokes categories*`,
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

export default categoryListResponse;
