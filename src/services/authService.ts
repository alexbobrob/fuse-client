import axios, { setAuthToken } from '../apiclient';
import { SIGNIN, SIGNUP } from '../constants';

export interface UserData {
  _id?: string;
  fullName?: string;
  email?: string;
  password?: string;
  companyType?: string;
  picture?: string
}

export async function signup(data: UserData): Promise<string> {
  try {
    const response = await axios.post(SIGNUP, data);
    return response.data
  } catch (error) {
    throw new Error((error as any).response.data.error);
  }
}

export async function signin(data: UserData): Promise<string> {
  try {
    const response = await axios.post(SIGNIN, data);
    setAuthToken(response.data.accessToken)
    localStorage.setItem('user', JSON.stringify(response.data));
    console.log(response.data)
    return response.data
  } catch (error) {
    throw new Error((error as any).response.data.error);
  }
}