import { bindActionCreators } from "@reduxjs/toolkit";
import ActionCreators from '../store/actionCreators/index'
import { useAppDispatch } from "./redux";

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(ActionCreators, dispatch)
}
