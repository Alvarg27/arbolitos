import axios from "axios";
const BASE_URL = "https://api.restaurants.tectify.io/restaurant";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_RESTAURANT_KEY,
  },
  baseURL: BASE_URL,
  withCredentials: true,
});
