import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchtasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //fetch data
  const fetchtasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  async function deletetask(id) {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:"delete",
    })
    setTasks(tasks.filter((task) => task.id !== id));
  }

  async function togglereminder(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }

  async function addTask(task) {
    const res = await fetch("http://localhost:5000/tasks",{
      method:"post",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(task)
    }) 

    const data = await res.json()
    setTasks([...tasks,data])

    // const id = Math.floor(Math.random() * 1000) + 3;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]); //注意原本的data就是array
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
