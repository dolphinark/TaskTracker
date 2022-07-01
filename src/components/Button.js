function Button(props) {
  const style = {
    backgroundColor: props.color ? "red" : "green",
  };

  return (
    <div className="btn" onClick={props.openAddTaskForm} style={style}>
      {props.text}
    </div>
  );
}

export default Button;
