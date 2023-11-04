import { useState, useEffect } from "react";
import { View, Text, Button, FlatList, ActivityIndicator } from "react-native";
import { database } from "../utils/firebase";
import { ref, onValue } from "firebase/database";

export const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const tasksCountRef = ref(database, "tasks");

    onValue(tasksCountRef, (snapshot) => {
      if (!!snapshot) {
        const data = snapshot.toJSON();

        setData(Object.values(data));
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

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
      <Button
        title="Crear nueva tarea"
        onPress={() => navigation.navigate("CreateTask")}
      />

      <FlatList
        style={{ padding: 8 }}
        data={data}
        keyExtractor={(task, index) => `${task.id}-${index}`}
        renderItem={({ item: task }) => (
          <View>
            <Text>{task.title}</Text>
            <Text>{task.descripcion}</Text>

            <Button
              title={`Ver tarea con id ${task.id}`}
              onPress={() =>
                navigation.navigate("Task", {
                  id: task.id,
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
};
