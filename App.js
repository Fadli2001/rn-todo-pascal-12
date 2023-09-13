import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import AppNavigation from "./src/navigation/RootNavigator";
import { Provider } from "react-redux";
import configureStore from "./src/store/store";
import Loading from "./src/shared/components/Loading";
import DepProvider from "./src/context/DependencyContext";
import apiClient from "./src/services/ApiClient";

export default function App() {
  const store = configureStore();
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <DepProvider services={{ apiClient: apiClient }}>
          <AppNavigation />
          <Loading />
          <StatusBar style="auto" />
        </DepProvider>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
