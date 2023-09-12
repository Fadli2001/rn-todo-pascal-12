import { LOGIN, LOGOUT } from "../../utils/constant";

const initialState = {
  isLoggedIn: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: action.payload,
      };
    case LOGOUT:
      return {
        isLoggedIn: !action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
