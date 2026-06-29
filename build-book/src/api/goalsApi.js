import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Get all Goals
export const getGoals = async () => {
  const response = await axios.get(`${API_URL}/goals`);
  return response.data;
};

// Create Goal
export const createGoal = async (text) => {
  const response = await axios.post(`${API_URL}/goals`, {
    text,
  });
  return response.data;
};

// Delete Goal
export const deleteGoal = async (id) => {
  const response = await axios.delete(`${API_URL}/goals/${id}`);
  return response.data;
};