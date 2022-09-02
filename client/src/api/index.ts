import axios from "axios";
import { API_URL } from "@env";
import { IPost } from "../models/IPost";
import { AuthPayloadType } from "../store/reducers/auth/authSlice";


export class ApiService {
  static async login(email: string, password: string): Promise<AuthPayloadType> {
    console.log(API_URL)
    const { data } = await axios.post<AuthPayloadType>(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return data;
  }

  static async register(username: string, email: string, password: string): Promise<AuthPayloadType> {
    const {data} = await axios.post<AuthPayloadType>(`${API_URL}/auth/register`, {
      username,
      email,
      password
    })
    return data
  }

  static async fetchPosts(token: string): Promise<IPost[]> {
    const { data } = await axios.get<IPost[]>(`${API_URL}/post`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }

  // static async fetchUsersPosts(token: string, user: string): Promise<IPost[]> {
  //   const { data } = await axios.get<IPost[]>(`${API_URL}/user/${user}/posts`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return data;
  // }

  static async post({ token, title, text }: { token: string, title: string, text: string }): Promise<IPost> {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    const { data } = await axios.post<IPost>(`${API_URL}/post`, formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
    return data;
  }

  static async delete({id, token}: {id: string, token: string}): Promise<IPost> {
    const { data } = await axios.delete<IPost>(`${API_URL}/post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }
}
