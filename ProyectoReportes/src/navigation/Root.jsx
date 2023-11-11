import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoadingScreen } from "../screens/LoadingScreen";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { ReportsScreen } from "../screens/ReportsScreen";
import { CreateReportScreen } from "../screens/CreateReportScreen";
import { AuthContext } from "../contexts/AuthContext";

const RootStack = createNativeStackNavigator();

export const Root = () => {
  const authContext = useContext(AuthContext);
  const isLoading = authContext.status === "loading";
  const isAuthenticated = authContext.status === "authenticated";

  return (
    <RootStack.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{ animation: "slide_from_right" }}
    >
      {isLoading ? (
        <RootStack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
      ) : isAuthenticated ? (
        <RootStack.Group>
          <RootStack.Screen name="ReportsScreen" component={ReportsScreen} />
          <RootStack.Screen
            name="CreateReportScreen"
            component={CreateReportScreen}
          />
        </RootStack.Group>
      ) : (
        <RootStack.Group>
          <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <RootStack.Screen name="LoginScreen" component={LoginScreen} />
          <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};
