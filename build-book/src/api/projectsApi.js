import axios from "axios";

const API_URL = "http://localhost:5000/api/projects";

//Get all Projects
export const getProjects = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

//Create Project
export const createProject = async (title, hours, completed) => {
  const response = await axios.post(API_URL, {
    title,
    hours,
    completed,
  });
  return response.data;
};


//Delete Project
export const deleteProject = async(id) =>{
    const response = await axios.delete(`${API_URL}/${id}`)
    return response.data
}
