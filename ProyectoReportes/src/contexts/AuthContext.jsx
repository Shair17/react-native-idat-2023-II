import { createContext, useState, useEffect, useRef } from "react";
import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TOKEN_KEY = "@token";
// export const BASE_API = "http://192.168.1.104:3000";
export const BASE_API = "http://192.168.1.102:3000";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    status: "loading",
    token: null,
    user: null,
  });
  const axiosInstanceRef = useRef(null);

  const getTokenFromStorage = async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      if (token !== null) {
        return token;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  const login = async ({ username, password }) => {
    try {
      const response = await axiosInstanceRef.current.post("/auth/login", {
        username,
        password,
      });
      const { id, username: usernameResponse, token } = response.data;

      await AsyncStorage.setItem(TOKEN_KEY, token);

      setAuthState({
        ...authState,
        status: "authenticated",
        token,
        user: {
          id,
          usernameResponse,
        },
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const register = async ({ username, password }) => {
    try {
      const response = await axiosInstanceRef.current.post("/auth/register", {
        username,
        password,
      });

      const { id, username: usernameResponse, token } = response.data;

      await AsyncStorage.setItem(TOKEN_KEY, token);

      setAuthState({
        ...authState,
        status: "authenticated",
        token,
        user: {
          id,
          usernameResponse,
        },
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
      setAuthState({
        status: "unauthenticated",
        token: null,
        user: null,
      });
    } catch (e) {
      setAuthState({
        status: "unauthenticated",
        token: null,
        user: null,
      });
    }
  };

  useEffect(() => {
    getTokenFromStorage().then((token) => {
      setAuthState((prevState) => ({
        ...prevState,
        token,
        status: "authenticated",
      }));
    });
  }, []);

  useEffect(() => {
    const configureAxios = () => {
      if (authState.token) {
        axiosInstanceRef.current = Axios.create({
          baseURL: BASE_API,
          headers: {
            Authorization: authState.token,
          },
        });
      } else {
        axiosInstanceRef.current = Axios.create({
          baseURL: BASE_API,
        });
      }
    };

    configureAxios();
  }, [authState.token]);

  useEffect(() => {
    const getMyProfile = async () => {
      if (!authState.token) return;

      try {
        const response = await axiosInstanceRef.current.get("/auth/me");

        const { id, token, username } = response.data;

        setAuthState({
          ...authState,
          status: "authenticated",
          token,
          user: {
            id,
            username,
          },
        });
      } catch (error) {
        setAuthState({
          ...authState,
          status: "unauthenticated",
          token: null,
          user: null,
        });
      }
    };

    getMyProfile();
  }, [authState.token]);

  useEffect(() => {
    console.log("DEBUG");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
        axios: axiosInstanceRef.current,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
