import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getSessions = async () => {
  const response = await axios.get(`${API_URL}/sessions`);
  return response.data;
};

export const createSession = async (title, hours, date, note) => {
  const response = await axios.post(`${API_URL}/sessions`, {
    title,
    hours,
    date,
    note,
  });
  return response.data;
};

export const deleteSession = async (id) => {
  const response = await axios.delete(`${API_URL}/sessions/${id}`);
  return response.data;
};