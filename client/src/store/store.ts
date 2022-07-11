import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";
import postReducer from "./reducers/post/postSlice";


const rootReducer = combineReducers({
  authReducer,
  postReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware => getDefaultMiddleware().concat())
  });
};

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType["dispatch"]
