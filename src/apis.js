import axios from "axios";
import { useAuth } from "./Authentication/auth";

const baseURL = "http://192.168.1.100:8000/api";

const config = {
  baseURL: baseURL,
};

const configWithToken = (token) => ({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

const useLogin = () => {
  const setToken = useAuth((state) => state.setToken);
  const setUser = useAuth((state) => state.setUser);
  const setRole = useAuth((state) => state.setRole);
  const setAuthenticated = useAuth((state) => state.setAuthenticated);
  const setMessage = useAuth((state) => state.setMessage);

  const login = async ({ username, password }) => {
    try {
      const res = await axios
        .create(config)
        .post("/login", { userName: username, password });

      if (res.status !== 200) {
        setAuthenticated(false);
        setMessage(res.data.message);
        return false;
      }

      console.log(res);
      // sessionStorage.setItem('loginres','res')

      // setToken(sessionStorage.getItem('loginres').data.access);
      setToken(res.data.access);
      setUser(res.data.username);
      setRole(res.data.role);
      setAuthenticated(true);
      setMessage(res.data.message);
      return true;
    } catch (error) {
      console.log(error);
      setAuthenticated(false);
      setMessage(error);
      return false;
    }
  };

  return { login };
  //esle function naii return gareko ho i.e login function
};

const useToken = () => {
  const token = useAuth((state) => state.accesstoken);
  const tokenInstance = axios.create(configWithToken(token));
  return { tokenInstance };
};

const useLogout = () => {
  const setToken = useAuth((state) => state.setToken);
  const setUser = useAuth((state) => state.setUser);
  const setRole = useAuth((state) => state.setRole);
  const setAuthenticated = useAuth((state) => state.setAuthenticated);
  const logout = () => {
    try {
      // sessionStorage.clear();
      setToken(null);
      setUser(null);
      setRole(null);
      setAuthenticated(false);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  return { logout };
};

export { useLogin, useToken, useLogout };
