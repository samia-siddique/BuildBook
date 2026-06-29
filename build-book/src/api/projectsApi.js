import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};

export const createProject = async (title, hours, completed) => {
  const response = await axios.post(`${API_URL}/projects`, {
    title,
    hours,
    completed,
  });
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await axios.delete(`${API_URL}/projects/${id}`);
  return response.data;
};