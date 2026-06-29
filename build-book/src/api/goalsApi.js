import axios from "axios";

const API_URL = "http://localhost:5000/api/goals";

//Get all Goals
export const getGoals = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

//Create Goal
export const createGoal = async (text) => {
  const response = await axios.post(API_URL, {
    text,
  });
  return response.data;
};

//Delete Goal
export const deleteGoal = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};


