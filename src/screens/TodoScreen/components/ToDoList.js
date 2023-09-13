import { StyleSheet, FlatList, View } from "react-native";
import Todo from "./Todo";
import EmptyListView from "./EmptyListView";
import { useSelector } from "react-redux";

export default function ToDoList() {
  const todosReducer = useSelector((state) => state.ToDoReducer.todos);  
  const todoType = useSelector((state) => state.ToDoReducer.type);

  const getVisisibleTodos = (todos, type) => {
    switch (type) {
      case "All":
        return todos
      case "Complete":
        return todos.filter((todo) => todo.isCompleted);
      case "Active":
        return todos.filter((todo) => !todo.isCompleted);
    }
  };

  let selectedTodos = getVisisibleTodos(todosReducer, todoType);

  return (
    <View
      style={{
        paddingHorizontal: 10,
      }}
    >
      <FlatList
        data={selectedTodos}
        renderItem={({ item }) => {
          return <Todo todo={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => <EmptyListView todoType={todoType} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
