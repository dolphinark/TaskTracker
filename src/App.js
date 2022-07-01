import { useState } from "react";
import Button from "./components/Button";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

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

  const [showAddForm, setShowAddForm] = useState(false);

  function deletetask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function togglereminder(id) {
    // 又忘記這邊要用map
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }

  function addTask(task) {
    const id = Math.floor(Math.random() * 1000) + 1; //忘記要給id
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]); //注意原本的data就是array
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Task Tracker</h1>
        <Button
          openAddTaskForm={() => {
            setShowAddForm(!showAddForm);
          }}
          text={showAddForm ? "Close" : "Add"}
          color={showAddForm}
        />
      </header>
      {showAddForm && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deletetask={deletetask}
          togglereminder={togglereminder}
        />
      ) : (
        "No Task Left Behind"
      )}
    </div>
  );
}

export default App;
