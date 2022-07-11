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
