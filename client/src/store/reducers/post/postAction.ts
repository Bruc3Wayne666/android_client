import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "../../../api";

export const fetchPosts = createAsyncThunk(
  'post/fetch',
  async (token: string, {rejectWithValue}) => {
      try {
        return await ApiService.fetchPosts(token)
      } catch (e) {
        return rejectWithValue('Couldn\'t fetch posts.')
      }
  }
)
