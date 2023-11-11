import { ActivityIndicator } from "react-native";
import { Div, Text } from "react-native-magnus";

export const LoadingScreen = () => {
  return (
    <Div flex={1} alignItems="center" justifyContent="center" bg="white">
      <ActivityIndicator size="large" />
    </Div>
  );
};
