import * as AuthActionCreators from '../reducers/auth/authAction'
import * as PostActionCreators from '../reducers/post/postAction'
import {authActions} from "../reducers/auth/authSlice";

export default {
  ...authActions,
  ...AuthActionCreators,
  ...PostActionCreators,
}
