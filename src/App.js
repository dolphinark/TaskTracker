import { useState } from "react";
import Task from "./components/Task";
import Button from "./components/Button";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      text: "refund",
      time: "Dec 12",
      checked: true,
    },
    {
      id: 2,
      text: "buy ticket",
      time: "Dec 12",
      checked: false,
    },
    { id: 3, text: "movie", time: "June 11", checked: false },
  ]);

  return (
    <div className="container">
      <header className="header">
        <h1>Task Tracker</h1>
        <Button />
      </header>
      <Task
        text={data.map((task) => (
          <div className="task">
            <h3>{task.text}</h3>
            <p>{task.time}</p>
          </div>
        ))}
      />
    </div>
  );
}

export default App;
