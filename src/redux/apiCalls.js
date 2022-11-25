import {
  loginStart,
  loginFailure,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
} from "./userRedux";

// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

export const RegisterUser = async (dispatch, user) => {
  dispatch(registerStart());

  const res = await fetch("http://localhost:8080/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user.username,
      email: user.email,
      password: user.password,
    }),
  });
  const data = await res.json();
  // remove try catch block for not getting error action
  data.username ? dispatch(registerSuccess(data)) : dispatch(registerFailure());
};

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

export const logoutUser = async (dispatch) => {
  dispatch(logout());
};
