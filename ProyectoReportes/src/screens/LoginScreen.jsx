import { useState, useContext } from "react";
import { Div, Text, Input, Button } from "react-native-magnus";
import { AuthContext } from "../contexts/AuthContext";

export const LoginScreen = () => {
  const [credentials, setCredentials] = useState({
    username: "shair",
    password: "12345",
  });
  const authContext = useContext(AuthContext);

  return (
    <Div flex={1} p="xl" bg="white">
      <Text>LoginScreen</Text>

      <Div mt="lg">
        <Input
          placeholder="Ingresa tu nombre de usuario"
          value={credentials.username}
          onChangeText={(username) => {
            setCredentials({
              ...credentials,
              username,
            });
          }}
        />
        <Input
          placeholder="Ingresa tu contraseña"
          mt="md"
          value={credentials.password}
          onChangeText={(password) => {
            setCredentials({
              ...credentials,
              password,
            });
          }}
          secureTextEntry
        />

        <Button onPress={() => authContext.login(credentials)} w="100%" mt="md">
          Iniciar sesión
        </Button>
      </Div>
    </Div>
  );
};
