import { LOGIN, LOGOUT } from "../../utils/constant";

function login(isLogin) {
  return {
    type: LOGIN,
    payload: isLogin,
  };
}

function logout(isLogout) {
  return {
    type: LOGOUT,
    payload: isLogout,
  };
}

export { login, logout };
