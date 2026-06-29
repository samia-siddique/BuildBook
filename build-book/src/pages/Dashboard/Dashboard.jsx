import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import assets from "../../assets/assets";
import GoalPreview from "../../components/GoalPreview/GoalPreview";
import SessionPreview from "../../components/SessionPreview/SessionPreview";
import { getSessions } from "../../api/sessionsApi";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import { getProjects } from "../../api/projectsApi";

const Dashboard = ({ name }) => {
  const [sessions, setSessions] = useState([]);
  const [projects, setProjects] = useState([]);
  const streak = 5;

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const data = await getSessions();
      setSessions(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard">
      <div className="greeting">
        <div className="left">
          <h2>Good Morning {name}</h2>
          <p>Be Productive, See Results</p>
          <p>Streak: {streak}</p>
        </div>

        <div className="right">
          <img src={assets.productive_img} alt="" />
        </div>
      </div>

      <div className="dashboard-cards">
        <GoalPreview />
        <SessionPreview session={sessions?.[0]} />
        <ProjectPreview project={projects?.[0]} />
      </div>
    </div>
  );
};

export default Dashboard;
