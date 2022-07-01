import Task from "./Task";

function Tasks({ tasks, deletetask, togglereminder }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          day={task.time}
          id={task.id}
          reminder={task.reminder}
          deletetask={deletetask}
          togglereminder={togglereminder}
        />
      ))}
    </div>
  );
}

export default Tasks;
