import React, { useEffect, useState } from "react";
import "./Projects.css";
import {
  createProject,
  deleteProject,
  getProjects,
} from "../../api/projectsApi";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState("");
  const [completed, setCompleted] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAdd = async (event) => {
    event.preventDefault();

    if (!title.trim()) return;

    try {
      await createProject(title, hours, completed);
      fetchProjects();
    } catch (error) {
      console.log(error);
    }

    setTitle("");
    setHours("");
    setCompleted("");
  };

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      await fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="projects">
      <div className="project-heading">
        <h2>PROJECTS</h2>
        <p>Track your coding projects and progress.</p>
      </div>

      <form onSubmit={handleAdd} className="project-form">
        <input
          type="text"
          placeholder="Enter Project Name"
          id="project"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={completed}
          onChange={(e) => setCompleted(e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
          <option value="Not Started">Not Started</option>
        </select>

        <input
          type="number"
          placeholder="Enter logged hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />

        <button>Add Project</button>
      </form>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            id={project._id}
            project={project.title}
            hours={project.hours}
            completed={project.completed}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
