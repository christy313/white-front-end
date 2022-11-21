import { loginStart, loginFailure, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  const res = await fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user.username,
      password: user.password,
    }),
  });
  const data = await res.json();
  // remove try catch block for not getting error action
  data.username ? dispatch(loginSuccess(data)) : dispatch(loginFailure());
};
