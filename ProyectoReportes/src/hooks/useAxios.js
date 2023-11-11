import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAxios = (url) => {
  const authContext = useContext(AuthContext);
  const axios = authContext.axios;
  const token = authContext.token;
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await axios.get(url, {
        headers: {
          Authorization: token,
        },
      });

      setResponse(result.data);
    } catch (error) {
      console.log(error.response);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading, refetch: fetchData };
};
