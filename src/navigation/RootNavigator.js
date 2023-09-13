import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/SpalshScreen/SplashScreen";
import { View } from "react-native";

import PATH from "./NavigationPath";
import ToDoScreen from "../screens/TodoScreen/ToDoScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import PopupMenu from "../screens/TodoScreen/components/PopupMenu";
import { navigationRef } from "./RootNavigation";
import { Login } from "../screens/LoginScreen/Login";
import LoginService from "../services/LoginService";
import { ToDo } from "../screens/TodoScreen/Todo";
import ToDoService from "../services/TodoService";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={PATH.SPLASH}>
        <Stack.Screen
          name={PATH.SPLASH}
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={PATH.LOGIN} options={{ headerShown: false }}>
          {() => <LoginScreen login={() => Login(LoginService)} />}
        </Stack.Screen>
        <Stack.Group
          screenOptions={({ navigation }) => {
            return {
              headerStyle: {
                backgroundColor: "#233D90",
              },
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
                fontSize: 30,
              },
              headerShadowVisible: false,
              headerRight: () => <PopupMenu navigation={navigation} />,
              headerLeft: () => <View />,
            };
          }}
        >
          <Stack.Screen name={PATH.TODO_LIST} options={{ title: "Todos" }}>
            {() => <ToDoScreen todo={() => ToDo(ToDoService)} />}
          </Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
