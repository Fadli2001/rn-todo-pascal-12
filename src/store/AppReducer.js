import { SHOW_LOADING } from "../utils/constant";

const initialState = {
  isLoading: false,
  theme: "dark",
  language: "en",
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state
  }
};


export default AppReducer