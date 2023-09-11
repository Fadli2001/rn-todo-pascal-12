import { combineReducers, createStore } from "redux";
import ToDoReducer  from "./todo/ToDoReducer";

const rootReducer = combineReducers({
  ToDoReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
