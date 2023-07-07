import axios from '../apiclient';
import { CHAT, MESSAGE } from '../constants';

export interface ChatData {
    loggedInUserId: string
    userId: string
    type: string
    allowCopy?: boolean
    allowAddMembers?: boolean
    allowExternalMembers?: boolean
}

export async function initializeChat(data: ChatData): Promise<string> {
    try {
      const response = await axios.post(CHAT, data);
      return response.data
    } catch (error) {
      throw new Error((error as any).response.data.error);
    }
  }

export async function fetchChats(id: string) {
    try {
    const response = await axios.get(CHAT+'/'+id);
    return response?.data
    } catch (error) {
    throw new Error((error as any).response?.data.error);
    }
}

export async function fetchMessages(chatId: string) {
    try {
    const response = await axios.get(MESSAGE+chatId);
    return response.data
    } catch (error) {
    throw new Error((error as any).response.data.error);
    }
}

export async function sendMessage(data: {content:string, chatId:string, loggedInUserId:string}) {
  try {
  const response = await axios.post(MESSAGE+'send', data);
  return response.data
  } catch (error) {
  throw new Error((error as any).response.data.error);
  }
}