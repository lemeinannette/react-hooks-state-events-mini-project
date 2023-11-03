import React from "react";

function Task(props) {
  const handleDelete = () => {
    props.onDelete(props.task.id);
  };

  return (
    <div className="task">
      <div className="label">{props.task.category}</div>
      <div className="text">{props.task.text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;

