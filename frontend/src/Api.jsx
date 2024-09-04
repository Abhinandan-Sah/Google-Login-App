import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/auth",
});

export const googleAuth = async (code) => {
  const response = await api.get(`/google?code=${code}`);
  return response.data
};
