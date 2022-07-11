import axios from "axios";
import { API_URL } from "@env";
import { IPost } from "../models/IPost";


export class ApiService {
  static async login(email: string, password: string): Promise<string> {
    const { data } = await axios.post<string>(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return data;
  }

  static async fetchPosts(token: string): Promise<IPost[]> {
    const { data } = await axios.get<IPost[]>(`${API_URL}/post`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }
}
