import { Trash2 } from "lucide-react";
import "./SessionCard.css";

const SessionCard = ({ id, project, hours, note, date, handleDelete }) => {
  return (
    <div className="session-card">
      <div className="session-header">
        <h3>{project}</h3>

        <span className="session-date">{date}</span>
      </div>

      <div className="session-content">
        <p className="session-hours">{hours} hrs</p>

        <p className="session-note">{note}</p>
      </div>

      <div className="session-footer">
        <button className="delete-btn" onClick={() => handleDelete(id)}>
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default SessionCard;
