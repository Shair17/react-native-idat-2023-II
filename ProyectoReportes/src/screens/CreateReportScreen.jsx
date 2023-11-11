import { useContext, useState } from "react";
import { Div, Text, Button, Input } from "react-native-magnus";
import { AuthContext } from "../contexts/AuthContext";

export const CreateReportScreen = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const axios = authContext.axios;
  const myId = authContext.user.id;
  const [report, setReport] = useState({
    title: `Reporte ${Date.now()}`,
    content: `Reporte hecho en la fecha ${new Date().toString()}`,
    userId: myId,
  });

  const createReport = async () => {
    if (!report.content || !report.title) {
      alert("Por favor llena los campos solicitados");
      return;
    }

    try {
      await axios.post("/reports", {
        title: report.title,
        content: report.content,
        id: report.userId,
      });
      navigation.goBack();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <Div flex={1} bg="white" p="xl">
      <Text fontSize="4xl" fontWeight="bold">
        Crear Reporte
      </Text>

      <Div mt="md">
        <Input
          value={report.title}
          placeholder="Ingresa el titulo"
          onChangeText={(title) => setReport({ ...report, title })}
        />
        <Input
          value={report.content}
          placeholder="Ingresa el contenido"
          mt="md"
          onChangeText={(content) => setReport({ ...report, content })}
        />

        <Button mt="md" block onPress={createReport}>
          Crear reporte
        </Button>
      </Div>
    </Div>
  );
};
