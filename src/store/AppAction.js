import { SHOW_LOADING } from "../utils/constant";

const showLoading = (isLoading) => {
  return {
    type: SHOW_LOADING,
    payload: isLoading,
  };
};

export { showLoading };
