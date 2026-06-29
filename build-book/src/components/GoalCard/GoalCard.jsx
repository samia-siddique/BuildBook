import "./GoalCard.css";
import { Trash2 } from "lucide-react";

const GoalCard = ({ goal, index, handleDelete, handleCompleted }) => {
  return (
    <div className="goal-card">
      <h3 className={goal.completed ? "completed-goal" : ""}>{goal.text}</h3>

      <div className="goal-actions">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={goal.completed}
            onChange={() => handleCompleted(index)}
          />

          <span className="checkmark"></span>
        </label>

        <button className="delete-btn" onClick={() => handleDelete(goal._id)}>
          <Trash2 className="trash-bin" size={18} />
        </button>
      </div>
    </div>
  );
};

export default GoalCard;
