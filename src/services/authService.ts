import axios, { setAuthToken } from '../apiclient';
import { SIGNIN, SIGNUP } from '../constants';

export interface SignupData {
  fullName?: string;
  email: string;
  password: string;
  companyType?: string;
}

export async function signup(data: SignupData): Promise<string> {
  try {
    const response = await axios.post(SIGNUP, data);
    return response.data;
  } catch (error) {
    throw new Error((error as any).response.data.error);
  }
}

export async function signin(data: SignupData): Promise<string> {
  try {
    const response = await axios.post(SIGNIN, data);
    setAuthToken(response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as any).response.data.error);
  }
}
