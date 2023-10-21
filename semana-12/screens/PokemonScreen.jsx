import { ActivityIndicator, View } from "react-native";
import { useFetch } from "../hooks/useFetch";

export const PokemonScreen = (props) => {
  const url = props.route.params.url;
  const { data, error, isLoading } = useFetch(url);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // hacer la interfaz con la respuesta de la api de este componente
  // un ejemplo de api aquí puede ser https://pokeapi.co/api/v2/pokemon/1/
  return null;
};
