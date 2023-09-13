import { useDeps } from "../context/DependencyContext";
import LocalStorage from "../utils/LocalStorage";

const LoginService = () => {
  const { apiClient } = useDeps();
  const login = async (email, password) => {
    try {
      const data = await apiClient({
        method: "post",
        url: "/users/login",
        param: {
          email: email,
          password: password,
        },
      });
      // console.log(data);
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
