// it return a structure of the response to be sent to the user when like button is clicked
// and displays the option to get another joke or not

function goodJokeResponse() {
  return {
    text: "glad you liked it!",
    blocks: [
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*glad you liked it!* \n would you like another joke ?",
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
              text: "Yes 😊",
              emoji: true,
            },
            action_id: "one_more",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "No 😔",
              emoji: true,
            },
            action_id: "send_off",
          },
        ],
      },
    ],
  };
}

export default goodJokeResponse;
