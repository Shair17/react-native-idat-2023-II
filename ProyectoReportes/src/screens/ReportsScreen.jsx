import { useContext, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { Div, Button } from "react-native-magnus";
import { AuthContext } from "../contexts/AuthContext";
import { useAxios } from "../hooks/useAxios";
import { ReportCard } from "../components/ReportCard";

export const ReportsScreen = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const axios = authContext.axios;
  const { error, loading, response, refetch } = useAxios("/reports");

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={authContext.logout}>Cerrar sesión</Button>
      ),
    });
  }, [navigation]);

  if (loading || !response) {
    return (
      <Div flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator size="large" />
      </Div>
    );
  }

  if (error) {
    return (
      <Div flex={1} alignItems="center" justifyContent="center">
        <Text>{JSON.stringify(error)}</Text>
      </Div>
    );
  }

  return (
    <Div flex={1} p="xl" bg="white">
      <Button block onPress={() => navigation.navigate("CreateReportScreen")}>
        Crear reporte
      </Button>

      <FlatList
        data={response}
        style={{ marginTop: 20 }}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { title, content, id } }) => {
          return (
            <ReportCard
              title={title}
              content={content}
              handleDeleteReport={async () => {
                try {
                  const response = await axios.delete(`/reports/${id}`);
                  await refetch();
                } catch (error) {
                  console.log(error);
                }
              }}
            />
          );
        }}
      />
    </Div>
  );
};
