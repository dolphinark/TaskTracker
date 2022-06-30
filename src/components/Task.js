import { FaTimes } from "react-icons/fa";

function Task(props) {
  return (
    <div
      className={`task-container ${props.reminder ? "reminder" : ""}`}
      onDoubleClick={props.togglereminder}
    >
      <div className="task">
        <h3>{props.text}</h3>
        <p>{props.day}</p>
      </div>
      <FaTimes
        className="cancel-icon"
        onClick={(id) => props.deletetask(props.id)}
      />
    </div>
  );
}

export default Task;
