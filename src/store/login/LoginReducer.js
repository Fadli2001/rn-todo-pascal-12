import { LOGIN, LOGOUT } from "../../utils/constant";

const initialState = {
  isLoggedIn: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: true
      };
    case LOGOUT:
      return {
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default LoginReducer;
