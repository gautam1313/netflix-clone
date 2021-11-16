import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart);
  try {
    const res = await axios.post("auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
