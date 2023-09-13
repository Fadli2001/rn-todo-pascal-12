import { StyleSheet, Text, View } from "react-native";
import React from "react";

import todoStyles from "./Todo.style";
import ToDoButton from "../../../shared/components/ToDoButton";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../../../store/todo/ToDoAction";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const onTodoComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <View style={todoStyles.container}>
      <Text
        style={[
          todoStyles.text,
          todo.isComplete ? todoStyles.todoComplete : null,
        ]}
      >
        {todo.name}
      </Text>
      <View style={todoStyles.buttonWrapper}>
        <ToDoButton
          nameIcon={"checkmark-done-circle-outline"}
          onPress={() => onTodoComplete(todo.id)}
          colorIcon={"green"}
        />
        <ToDoButton
          nameIcon={"close-circle-outline"}
          onPress={() => onDeleteTodo(todo.id)}
          colorIcon={"red"}
        />
      </View>
    </View>
  );
}
