import Task from "./Task";

function Tasks({ tasks, deletetask, togglereminder }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          day={task.time}
          deletetask={deletetask}
          id={task.id}
          togglereminder={togglereminder}
          reminder={task.reminder}
        />
      ))}
    </div>
  );
}

export default Tasks;
