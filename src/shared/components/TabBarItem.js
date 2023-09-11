import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeType } from "../../store/todo/ToDoAction";

export default function TabBarItem({ title }) {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.ToDoReducer.type);

  const onSetType = () => {
    dispatch(changeType(title));
  };
  return (
    <TouchableOpacity onPress={onSetType} style={[styles.container]}>
      <Text style={[styles.text, type === title ? styles.textActive : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
  },
  text: {
    color: "#000",
    fontSize: 17,
  },
  textActive: {
    fontWeight: "900",
    color: "black",
    fontSize: 17.5,
  },
});
