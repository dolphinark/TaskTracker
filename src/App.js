import { useState } from "react";
import Task from "./components/Task";
import Button from "./components/Button";
import { FaTimes } from "react-icons/fa";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "refund",
      time: "Dec 12",
      reminder: true,
    },
    {
      id: 2,
      text: "buy ticket",
      time: "Dec 12",
      reminder: false,
    },
    { id: 3, text: "movie", time: "June 11", reminder: false },
  ]);

  function deletetask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function togglereminder(id) {
    console.log(id);
    alert(id);
  }

  const tasksElements = tasks.map((task) => (
    <div className="task-container" onClick={() => togglereminder(task.id)}>
      <div className="task">
        <Task text={task.text} day={task.time} />
      </div>
      <FaTimes className="cancel-icon" onClick={(id) => deletetask(task.id)} />
    </div>
  ));

  return (
    <div className="container">
      <header className="header">
        <h1>Task Tracker</h1>
        <Button />
      </header>
      {tasks.length > 0
        ? //   <Task
          //     text={tasks.map((task) => (
          //       <div className="task-container">
          //         <div className="task">
          //           <h3>{task.text}</h3>
          //           <p>{task.time}</p>
          //         </div>
          //         <FaTimes
          //           className="cancel-icon"
          //           onClick={(id) => deletetask(task.id)}
          //         />
          //       </div>
          //     ))}
          //  />
          tasksElements
        : "No Task Left Behind"}
    </div>
  );
}

export default App;
