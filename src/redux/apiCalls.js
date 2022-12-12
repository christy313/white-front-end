import {
  loginStart,
  loginFailure,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
} from "./userRedux";

export const RegisterUser = async (dispatch, user) => {
  dispatch(registerStart());

  try {
    const res = await fetch("https://allwhite.onrender.com/api/auth/register", {
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
    if (!data.username) throw new Error("Server error - user result");
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerFailure());
  }
};

export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await fetch("https://allwhite.onrender.com/api/auth/login", {
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
    if (!data.username) throw new Error("Server error - user result");
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const logoutUser = async (dispatch) => {
  dispatch(logout());
};
