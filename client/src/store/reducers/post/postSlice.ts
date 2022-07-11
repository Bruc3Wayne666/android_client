import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../../models/IPost";
import { fetchPosts } from "./postAction";

interface InitialState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
}

const initialState: InitialState = {
  posts: [],
  isLoading: false,
  error: ''
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending.type]: state => {
      state.isLoading = true
    },
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
      state.isLoading = false
      state.error = ''
      state.posts = action.payload
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export default postSlice.reducer
