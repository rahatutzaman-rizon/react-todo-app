import React, { useEffect, useRef, useState } from "react";
import "./todoform.css";

const TodoForm = ({ hanledeAddTask, task }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("low"); // New state for priority
  const [invalid, setInvalid] = useState(false);
  const inputRef = useRef(null);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!text || text === "") {
      setInvalid(true);
      inputRef.current.focus();
      return;
    }
    const taskId = task ? task?.id : "";
    hanledeAddTask(text, taskId, priority); // Pass priority to the handler
    setText("");
    setPriority("low"); // Reset priority after submitting
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "task") {
      setText(value);
      if (value.length === 0) {
        setInvalid(true);
      } else {
        setInvalid(false);
      }
    }
  };

  useEffect(() => {
    setText(task?.title);
  }, [task?.id]);

  return (
    <div className="bg-teal-200 w-full mt-6 mb-4">
      <form method="post" onSubmit={handleSumbit}>
        <div className="mx-24 gap-4">
          <input
            ref={inputRef}
            type="text"
            className={`taskinput ${invalid ? `invalid` : `valid`} input input-bordered input-accent w-full max-w-xs mt-2`}
            placeholder="Write your task here..."
            autoComplete="off"
            name="task"
            value={text}
            onChange={(e) => handleChange(e)}
          />
        
          <button className="btn btn-outline btn-error mt-2">
            {task ? `Update task` : `Add task`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
