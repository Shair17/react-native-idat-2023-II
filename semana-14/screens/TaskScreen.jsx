import { useState, useEffect } from "react";
import { database } from "../utils/firebase";
import { ref, child, get } from "firebase/database";
import { Text, Button, View } from "react-native";

export const TaskScreen = (props) => {
  const [task, setTask] = useState({});
  const id = props.route.params.id;

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `tasks/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setTask(data);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <Text>ID: {task.id}</Text>
      <Text>Título: {task.title}</Text>
      <Text>Descripcion: {task.descripcion}</Text>

      <Button title="Ir atrás" onPress={() => props.navigation.goBack()} />
    </View>
  );
};
