import axios from "../apiclient";
import { SEARCH_USER } from "../constants";

export async function searchUsers(name: string): Promise<string> {
  try {
    const response = await axios.get(`${SEARCH_USER}/${name}`);
    return response.data;
  } catch (error) {
    throw new Error((error as any).response.data.error);
  }
}
