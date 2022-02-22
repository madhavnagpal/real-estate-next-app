import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  let response = {};
  try {
    response = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        // "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "x-rapidapi-key": "35c54b0460mshd7b6049bc658008p1209c5jsnd7000075b0f4",
      },
    });
  } catch (err) {
    console.log(err);
  }

  return response.data;
};
