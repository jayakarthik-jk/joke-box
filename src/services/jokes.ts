import http from "./http";
import jokeResponse from "../responses/joke";

// base url for the joke api
const base_url = "https://v2.jokeapi.dev/joke";
// filters for the search. we can add blacklisted words.
const filters = "?type=single";

// util function returns the url for the api call
const getApiUrl = (category: string | undefined) => {
  if (!category) {
    category = "Any";
  }
  return `${base_url}/${category}${filters}`;
};

// this function returns a random joke
export async function random(username?: string) {
  const API_URL = getApiUrl(undefined);
  const data = await http.get(API_URL);

  if (data instanceof Error || data.error) {
    return "sorry, something went wrong";
  }

  return jokeResponse(data.joke as string, data.category as string, username);
}

// this function returns a joke from a given category
export async function byCategory(category: string, username?: string) {
  const API_URL = getApiUrl(category);
  const data = await http.get(API_URL);

  if (data instanceof Error || data.error) {
    return "sorry, something went wrong";
  }

  return jokeResponse(data.joke as string, category, username);
}

const Jokes = {
  random,
  byCategory,
};

export default Jokes;
