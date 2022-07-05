import { FaTimes } from "react-icons/fa";
import React from "react";

function Task(props) {
  return (
    <div
      className={`task-container ${props.reminder ? "reminder" : ""}`}
      onDoubleClick={()=>props.togglereminder(props.id)}
    >
      <div className="task">
        <h3>{props.text}</h3>
        <p>{props.day}</p>
      </div>
      <FaTimes
        className="cancel-icon"
        onClick={() => props.deletetask(props.id)}
      />
    </div>
  );
}

export default Task;
