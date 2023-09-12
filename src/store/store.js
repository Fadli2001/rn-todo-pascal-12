import { combineReducers, createStore } from "redux";
import ToDoReducer  from "./todo/ToDoReducer";
import LoginReducer  from "./login/LoginReducer";
import AppReducer  from "./AppReducer";

const rootReducer = combineReducers({
  ToDoReducer, LoginReducer ,AppReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
