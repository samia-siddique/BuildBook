import { useEffect, useState } from "react";
import "./Goals.css";
import GoalCard from "../../components/GoalCard/GoalCard";

import { getGoals, createGoal, deleteGoal } from "../../api/goalsApi";

const Goals = () => {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const data = await getGoals();
      setGoals(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!goal.trim()) return;

    try {
      await createGoal(goal);
      setGoal("");
      fetchGoals();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteGoal(id);
      fetchGoals();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompleted = (clickedIndex) => {
    const updatedGoals = goals.map((goal, index) => {
      if (index === clickedIndex) {
        return {
          ...goal,
          completed: !goal.completed,
        };
      }

      return goal;
    });

    setGoals(updatedGoals);
  };

  return (
    <div className="goals">
      <div className="goal-heading">
        <h2>Goals</h2>
        <p>Plan your this weeks Goals.</p>
      </div>

      <form onSubmit={handleAdd} className="goal-form">
        <input
          type="text"
          placeholder="Add Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <div className="goal-list">
        {goals.map((goal, index) => (
          <GoalCard
            key={goal._id}
            goal={goal}
            index={index}
            handleDelete={handleDelete}
            handleCompleted={handleCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default Goals;
