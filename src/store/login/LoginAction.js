import { LOGIN, LOGOUT } from "../../utils/constant";

function login() {
  return {
    type: LOGIN
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

export { login, logout };
