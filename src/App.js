import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchtasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //fetch tasks
  const fetchtasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //fetch task
  const fetchtask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  async function deletetask(id) {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "delete",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  }

  async function togglereminder(id) {
    const taskToToggle = await fetchtask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  }

  async function addTask(task) {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 1000) + 3;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]); //???????????????data??????array
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Task Tracker</h1>
        {location.pathname === "/" && (
          <Button
            openAddTaskForm={() => {
              setShowAddForm(!showAddForm);
            }}
            text={showAddForm ? "Close" : "Add"}
            color={showAddForm}
          />
        )}
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
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
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
