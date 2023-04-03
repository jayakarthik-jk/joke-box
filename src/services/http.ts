import axios from "axios";

// This function makes an http get request to a given url and returns the data from the response.
// If the response is not 2xx, an error is returned. If the request fails, an error is returned.
async function get(url: string) {
  try {
    const response = await axios.get(url);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    return new Error(response.data);
  } catch (error: any) {
    console.log(error);
    return new Error(error.message);
  }
}

const http = {
  get,
};

export default http;
