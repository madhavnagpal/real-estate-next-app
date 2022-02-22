import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  let response = {};
  try {
    response = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      },
    });
  } catch (err) {
    console.log(err);
  }

  return response.data;
};
