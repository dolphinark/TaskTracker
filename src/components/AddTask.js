import { useState } from "react";

function AddTask(props) {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return; 
    }
    props.addTask({ text, time, reminder });
    setText("");
    setTime("");
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="input-section">
        {/* 忘記能使用label */}
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="input-section">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="check-section">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          checked={reminder} //★
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
}
export default AddTask;
