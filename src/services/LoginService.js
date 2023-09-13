import { useDeps } from "../context/DependencyContext";
import LocalStorage from "../utils/LocalStorage";

const LoginService = () => {
  const { apiClient } = useDeps();
  const login = async (email, password) => {
    try {
      const data = await apiClient({
        method: "post",
        url: "/auth/login",
        param: {
          email: email,
          password: email,
        },
      });
      await LocalStorage().setData("token", data);
    } catch (error) {
      throw error;
    }
  };

  return {
    login,
  };
};

export default LoginService;
