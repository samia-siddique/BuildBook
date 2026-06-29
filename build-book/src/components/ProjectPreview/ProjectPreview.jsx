import React from "react";
import "./ProjectPreview.css";
import { useNavigate } from "react-router-dom";
import "../Card/Card.css";

const ProjectPreview = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      className="preview-card project-preview"
      onClick={() => navigate("/projects")}
    >
      <div className="project-top">
        <p>This Month</p>
        <h2>PROJECTS</h2>
      </div>

      {project ? (
        <>
          <div className="project-middle">
            <h3>{project.title}</h3>

            <span
              className={`status ${
                project.completed === "Completed"
                  ? "completed"
                  : project.completed === "InProgress"
                    ? "progress"
                    : "pending"
              }`}
            >
              {project.completed}
            </span>
          </div>

          <div className="project-last">
            <p>View All →</p>
          </div>
        </>
      ) : (
        <>
          <div className="project-middle">
            <h3>No Projects Yet</h3>
            <p>Start your first project.</p>
          </div>

          <div className="project-last">
            <p>View All →</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectPreview;
