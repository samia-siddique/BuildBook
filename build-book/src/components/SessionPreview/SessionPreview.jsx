import React from "react";
import "./SessionPreview.css";
import { useNavigate } from "react-router-dom";
import "../Card/Card.css";

const SessionPreview = ({ session }) => {
  const navigate = useNavigate();

  return (
    <div
      className="preview-card session-preview"
      onClick={() => navigate("/sessions")}
    >
      <div className="session-top">
        <p>Current</p>
        <h2>SESSION</h2>
      </div>

      {session ? (
        <>
          <div className="session-middle">
            <h3>{session.title}</h3>
            <p>{session.hours} hrs</p>
            <p>{session.note}</p>
          </div>

          <div className="session-last">
            <span>{new Date(session.date).toLocaleDateString("en-GB")}</span>

            <p>View All →</p>
          </div>
        </>
      ) : (
        <>
          <div className="session-middle">
            <h3>No Sessions Yet</h3>
            <p>Start your first coding session.</p>
          </div>

          <div className="session-last">
            <p>View All →</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SessionPreview;
