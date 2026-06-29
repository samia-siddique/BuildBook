import React, { useEffect, useState } from "react";
import "./Sessions.css";
import SessionCard from "../../components/SessionCard/SessionCard";

import {
  createSession,
  deleteSession,
  getSessions,
} from "../../api/sessionsApi";

const Sessions = () => {
  const [sessions, setSessions] = useState([]);
  const [title, setTitle] = useState("");
  const [hours, setHour] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const data = await getSessions();
      setSessions(Array.isArray(data) ? data : data?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSession = async (event) => {
    event.preventDefault();
    if (!title.trim()) return;

    try {
      await createSession(title, hours, date, note);
      fetchSessions();
    } catch (error) {
      console.log(error);
    }

    setNote("");
    setDate("");
    setTitle("");
    setHour("");
  };

  const handleDelete = async (id) => {
    try {
      await deleteSession(id);
      await fetchSessions();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="session">
      <div className="session-heading">
        <h2>SESSION</h2>
        <p>Track every study session you complete.</p>
      </div>

      <form onSubmit={handleSession} className="session-form">
        <input
          type="text"
          placeholder="Enter Project name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Project Hours"
          value={hours}
          onChange={(e) => setHour(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          placeholder="Write note about the Project"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button type="submit">Create Session</button>
      </form>

      <div className="session-list">
        {(Array.isArray(sessions) ? sessions : []).map((session) => (
          <SessionCard
            key={session._id}
            id={session._id}
            project={session.title}
            hours={session.hours}
            note={session.note}
            date={new Date(session.date).toLocaleDateString("en-GB")}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Sessions;
