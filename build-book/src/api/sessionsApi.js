import axios from "axios";

const API_URL = "http://localhost:5000/api/sessions";

//Get all Sessions
export const getSessions = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

//Create Session
export const createSession = async (title, hours, date, note) => {
  const response = await axios.post(API_URL, {
    title,
    hours,
    date,
    note,
  });
  return response.data;
};

//Delete Session
export const deleteSession = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
