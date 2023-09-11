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
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state, // salin data
        newTodoName: "",
        todos: [...state, action.payload],
      };
    case "CHANGE_TYPE ":
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};

export default ToDoReducer;
