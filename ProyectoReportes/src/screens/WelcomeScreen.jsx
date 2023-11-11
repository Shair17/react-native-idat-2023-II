import { Div, Text, Button } from "react-native-magnus";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <Div p="xl" bg="white" flex={1}>
      <Text fontSize="4xl" fontWeight="bold">
        Hola, bienvenido
      </Text>

      <Div flexDir="row" justifyContent="space-between" mt="lg">
        <Button onPress={() => navigation.navigate("LoginScreen")}>
          Iniciar sesión
        </Button>

        <Button onPress={() => navigation.navigate("RegisterScreen")}>
          Registrarse
        </Button>
      </Div>
    </Div>
  );
};
