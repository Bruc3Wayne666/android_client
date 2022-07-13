import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "./authAction";

interface IAuthState {
  isLoading: boolean;
  token: string;
  error: string;
}

const initialState: IAuthState = {
  isLoading: false,
  token: '',
  error: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isLoading = false
      state.error = ''
      state.token = ''
    }
  },
  extraReducers: {
    [login.pending.type]: state => {
      state.isLoading = true
    },
    [login.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = ''
      state.token = action.payload
    },
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const authActions = authSlice.actions
export default authSlice.reducer
