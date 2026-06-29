import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ id, project, hours, completed, handleDelete }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{project}</h3>

        <span className="project-hours">{hours} hrs</span>
      </div>

      <div className="project-bottom">
        <span
          className={`status ${
            completed === "Completed"
              ? "completed"
              : completed === "InProgress"
                ? "progress"
                : "pending"
          }`}
        >
          {completed}
        </span>

        <button className="delete-btn" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
