import { baseUrl } from "@/src/config/apis";
import { ContactDataObject } from "@/src/modules/UserInput/Contact/types";
import axios from "axios";
import getHeaders from "../src/utils/headers";

/**
 * Updates the contact object of a resume with given resume ID
 * @param key The key to update
 * @returns A function with following parameters 👇🏻
 *
 * @param token Firebase ID Token
 * @param resumeId Resume ID to update
 * @param body {Key, value} pair of the object.
 */
const patchContact =
  (key: string) =>
  async (
    token: string = null,
    resumeId: string,
    body: { [key: string]: string | Array<ContactDataObject> }
  ) => {
    const res = await axios.patch(
      `${baseUrl}/resume/contact/${key}/${resumeId}`,
      body,
      {
        headers: getHeaders(token)
      }
    );

    return res.data;
  };

export default patchContact;
