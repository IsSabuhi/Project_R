import { baseUrl } from "@/src/config/apis";
import axios from "axios";

/**
 * Helps cold start the Heroku server by making an empty request to base endpoint
 * @returns Response code from the backend server
 */
export const coldStartServer = async () => {
  return await axios
    .get(`${baseUrl}`)
    .then((res) => res)
    .catch((err) => err);
};
