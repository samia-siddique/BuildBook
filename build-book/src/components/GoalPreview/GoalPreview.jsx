import React from "react";
import "./GoalPreview.css";
import assets from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import "../Card/Card.css";

const Goalpreview = () => {
  const navigate = useNavigate();

  const percent = 70;

  return (
    <div
      className="preview-card goal-preview"
      onClick={() => navigate("/goals")}
    >
      <div className="goal-top">
        <p>Check out this week</p>
        <h2>GOALS</h2>
      </div>

      <div className="goal-middle">
        <img src={assets.goals_img} alt="" />
      </div>

      <div className="goal-last">{percent}% Completed</div>
    </div>
  );
};

export default Goalpreview;
