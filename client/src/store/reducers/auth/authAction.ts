import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "../../../api";

export const login = createAsyncThunk(
  'auth/login',
  async ({email, password }: {email: string, password: string }, { rejectWithValue }) => {
    try {
      return await ApiService.login(email, password);
    } catch (e) {
      return rejectWithValue("Couldn't authorize.");
    }
  },
);

export const register = createAsyncThunk(
  'auth/login',
  async ({username, email, password }: {username: string, email: string, password: string }, { rejectWithValue }) => {
    try {
      return await ApiService.register(username, email, password);
    } catch (e) {
      return rejectWithValue("Couldn't authorize.");
    }
  }
)

// export const logout = createAsyncThunk(
//   'auth/logout',
//   async (_, {rejectWithValue}) => {
//     try {
//       // make cookie or localstorage or smt like this in the future
//     } catch (e) {
//       return rejectWithValue("Couldn't logout.");
//     }
//   }
// )
