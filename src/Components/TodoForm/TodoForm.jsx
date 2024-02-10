import  { useEffect, useRef, useState } from "react";
import "./todoform.css";
const TodoForm = ({ hanledeAddTask, task }) => {
  const [text, setText] = useState("");
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
    hanledeAddTask(text, taskId);
    setText("");
  };

  const handleChange = (e) => {
    const taskValue = e.target.value;
    if (taskValue?.length === 0) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
    setText(taskValue);
  };

  useEffect(() => {
    setText(task?.title);
  }, [task?.id]);

  return (
    <div className="bg-teal-200 w-full mt-6 mb-4  ">
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
         
         
            <button className="btn btn-outline btn-error">{task ? `Update task` : `Add task`}</button>
          </div>
     
      </form>
    </div>
  );
};

export default TodoForm;