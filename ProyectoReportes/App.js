import { ThemeProvider } from "react-native-magnus";
import { NavigationContainer } from "@react-navigation/native";
import { Root } from "./src/navigation/Root";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}
