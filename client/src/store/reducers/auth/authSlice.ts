import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "./authAction";
import { IUser } from "../../../models/IUser";

interface IAuthState {
  user: IUser | null;
  isLoading: boolean;
  token: string;
  error: string;
}

const initialState: IAuthState = {
  user: null,
  isLoading: false,
  token: '',
  error: ''
}

export interface AuthPayloadType {
  token: string;
  user: IUser;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isLoading = false
      state.error = ''
      state.token = ''
      state.user = null
    }
  },
  extraReducers: {
    [login.pending.type]: state => {
      state.isLoading = true
    },
    [login.fulfilled.type]: (state, action: PayloadAction<AuthPayloadType>) => {
      state.isLoading = false
      state.error = ''
      state.token = action.payload.token
      state.user = action.payload.user
    },
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const authActions = authSlice.actions
export default authSlice.reducer
