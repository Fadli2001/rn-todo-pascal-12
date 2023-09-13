import { useDeps } from "../context/DependencyContext";
import LocalStorage from "../utils/LocalStorage";

const LoginService = () => {
  const { apiClient } = useDeps();
  const login = async (email, password) => {
    try {
      const data = await apiClient({
        method: "post",
        url: "/users/login",
        params: {
          email: email,
          password: password,
        },
      });            
      await LocalStorage().setData("token", data.data.token);
    } catch (error) {
      throw error;
    }
  };

  return {
    login,
  };
};

export default LoginService;
