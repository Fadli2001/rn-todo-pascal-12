import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppNavigation from "./src/navigation/RootNavigator";
import { Provider } from "react-redux";
import configureStore from "./src/store/store";

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigation />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
