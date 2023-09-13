import { LOGIN, LOGOUT } from "../../utils/constant";

function loginAction() {
  return {
    type: LOGIN
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

export { loginAction, logout };
