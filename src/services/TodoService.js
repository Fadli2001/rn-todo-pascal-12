import { useDeps } from "../context/DependencyContext";

const ToDoService = () => {
  const { apiClient } = useDeps();
  const getTodoService = async () => {
    try {
      return await apiClient({
        url: "/todos",
        method: "get",
      });
    } catch (e) {
      throw e;
    }
  };

  const addTodoService = async (todo) => {
    try {
      return await apiClient({
        url: "/todos",
        method: "post",
        params: {
          name: todo.name,          
        },
      });
    } catch (e) {
      throw e;
    }
  };


  const deleteTodoService = async (id) => {
    try {
      return await apiClient({
        url: "/todos/" + id,
        method: "delete",
      });
    } catch (e) {
      throw e;
    }
  };

  return {
    getTodoService,
    addTodoService,    
    deleteTodoService,
  };
};

export default ToDoService;
