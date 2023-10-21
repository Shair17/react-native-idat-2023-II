import { View, Text, Button, FlatList, ActivityIndicator } from "react-native";
import { useFetch } from "../hooks/useFetch";

export const HomeScreen = ({ navigation }) => {
  const { data, isLoading } = useFetch("https://pokeapi.co/api/v2/pokemon/");

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        style={{ padding: 8 }}
        data={data.results}
        keyExtractor={(pokemon, index) => `${pokemon.name}-${index}`}
        renderItem={({ item: pokemon }) => (
          <View>
            <Text>{pokemon.name}</Text>

            <Button
              title={`Ver información sobre ${pokemon.name}`}
              onPress={() =>
                navigation.navigate("Pokemon", {
                  url: pokemon.url,
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
};
