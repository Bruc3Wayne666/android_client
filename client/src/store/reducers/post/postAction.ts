import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "../../../api";

export const fetchPosts = createAsyncThunk(
  'post/fetch',
  async (token: string, {rejectWithValue}) => {
      try {
        console.log('==================');
        return await ApiService.fetchPosts(token)
      } catch (e) {
        return rejectWithValue('Couldn\'t fetch posts.')
      }
  }
)


export const post = createAsyncThunk(
  'post',
  async ({token, title, text}: {token: string, title: string, text: string}, {rejectWithValue}) => {
    try {
      return await ApiService.post({ token, title, text })
    } catch (e) {
      return rejectWithValue('Couldn\'t create post.')
    }
  }
)


export const deletePost = createAsyncThunk(
  'post/delete',
  async ({id, token}: {id: string, token: string}, {rejectWithValue}) => {
    try {
      return await ApiService.delete({id, token})
    } catch (e) {
      return rejectWithValue('Couldn\'t delete post.')
    }
  }
)
