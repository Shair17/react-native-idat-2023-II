import { Div, Text, Button } from "react-native-magnus";

export const ReportCard = ({ title, content, handleDeleteReport }) => {
  return (
    <Div my="md" bg="gray200" rounded="xl" p="lg">
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Text mt="md">{content}</Text>

      <Button
        block
        fontSize="sm"
        p="sm"
        mt="md"
        color="red100"
        bg="red500"
        onPress={handleDeleteReport}
      >
        Eliminar reporte
      </Button>
    </Div>
  );
};
