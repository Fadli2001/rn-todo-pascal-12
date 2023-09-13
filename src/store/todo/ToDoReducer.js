import {
  ADD_TODO,
  CHANGE_TYPE,
  DELETE_TODO,
  SET_TODO,
  SET_TODO_NAME,
  TOGGLE_COMPLETE,
} from "../../utils/constant";

const initialState = {
  newTodoName: "",
  todos: [
    { id: 1, title: "Olahraga", complete: true },
    { id: 2, title: "Ngoding", complete: false },
    { id: 3, title: "Ngopskuy", complete: true },
  ],
  type: "All",
};

const ToDoReducer = (state = initialState, action) => {
  // return {
  //     type : "CHANGE_TYPE",
  //   //     payload :  {
  //         title: todoName,
  //         complete: false,
  //         id: 3
  //       };
  // }
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state, // salin data
        newTodoName: "",
        todos: [...state.todos, action.payload], // action.todoBaru
      };
    case CHANGE_TYPE:
      return {
        ...state,
        type: action.payload, // maksudnya action.title
      };
    case SET_TODO_NAME:
      return {
        ...state,
        newTodoName: action.payload,
      };
    case DELETE_TODO:
      let filteredTodos = state.todos.filter(
        (todo) => todo.id != action.payload
      );
      return {
        ...state,
        todos: filteredTodos,
      };
    case TOGGLE_COMPLETE:
      let newTodos = [...state.todos];
      newTodos.forEach((todo) => {
        if (todo.id == action.payload) {
          todo.complete = true;
        }
      });
      return {
        ...state,
        todos: newTodos,
      };
    case SET_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default ToDoReducer;
