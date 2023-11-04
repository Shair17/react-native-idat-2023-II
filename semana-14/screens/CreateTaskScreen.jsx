import { useState } from "react";
import { View, Button, TextInput, Alert } from "react-native";
import { database } from "../utils/firebase";
import { ref, set } from "firebase/database";

export const CreateTaskScreen = ({ navigation }) => {
  const [task, setTask] = useState({
    title: "",
    descripcion: "",
  });
  const handleAddTask = () => {
    if (!task.title || !task.descripcion) {
      Alert.alert("Por favor completa los datos!");
      return;
    }

    const nuevoId = Date.now().toString();

    // crear dato
    set(ref(database, `tasks/${nuevoId}`), {
      id: nuevoId,
      title: task.title,
      descripcion: task.descripcion,
    });

    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        style={{ backgroundColor: "#ddd", padding: 5 }}
        value={task.title}
        placeholder="Ingresa el titulo"
        onChangeText={(value) => {
          setTask({
            ...task,
            title: value,
          });
        }}
      />

      <View style={{ marginVertical: 10 }} />

      <TextInput
        style={{ backgroundColor: "#ddd", padding: 5 }}
        value={task.descripcion}
        placeholder="Ingresa la descripciíon"
        onChangeText={(value) => {
          setTask({
            ...task,
            descripcion: value,
          });
        }}
      />

      <View style={{ marginVertical: 10 }} />

      <Button title="Crear tarea" onPress={handleAddTask} />
    </View>
  );
};
