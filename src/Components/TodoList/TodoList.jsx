import  { useEffect, useState } from "react";
import "./todolist.css";
import CheckIcon from "../icons/CheckIcon";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
import { storeDataLocal } from "../../utils/storage";

const TodoList = ({ tasks, setTasks, filter, setTask }) => {
  const [filteredTasks, setFilteredTasks] = useState();

  const handleClickAction = (id, action) => {
    switch (action) {
      case "markAsDone": {
        const updatedTasks = tasks.map((item) =>
          item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
        );
        setTasks(updatedTasks);
        storeDataLocal("localTasks", updatedTasks);
        break;
      }
      case "delete": {
        if (confirm(`Are you sure you want to delete this task?`)) {
          const updatedTasks = tasks.filter((item) => item.id !== id);
          setTasks(updatedTasks);
          storeDataLocal("localTasks", updatedTasks);
        }
        break;
      }
      default:
        break;
    }
  };

  const handlePriorityChange = (id, priority) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, priority: priority } : item
    );
    setTasks(updatedTasks);
    storeDataLocal("localTasks", updatedTasks);
  };

  useEffect(() => {
    if (tasks?.length === 0) return;
    let results;
    switch (filter) {
      case "Active":
        results = tasks.filter((item) => !item?.isCompleted);
        break;
      case "Completed":
        results = tasks.filter((item) => item?.isCompleted);
        break;
      default:
        results = tasks;
        break;
    }
    setFilteredTasks(results);
  }, [filter, tasks]);

  return (
    <div className="w-full bg-sky-100">
     <h1 className="text-3xl bg-orange-300 text-center font-bold"> Total list : {tasks.length}</h1>
      <ul className="list_items">
        {(!filteredTasks || filteredTasks?.length === 0) && (
          <li className="list_item">No tasks available.</li>
        )}
        {filteredTasks &&
          filteredTasks?.length > 0 &&
          filteredTasks?.map((task) => (
            <li className="list_item w-full sm:w-1/2 md:w-1/3 p-2" key={`item_${task?.id}`}>
              <div className={`list_title ${getPriorityColorClass(task.priority)}`}>
                <span onClick={() => handleClickAction(task?.id, "markAsDone")}>
                  <CheckIcon checked={task?.isCompleted} />
                </span>
                {task?.title}
                <div className="priority_buttons">
                  <button
                    className={` priority_button ${task.priority === "high" ? "bg-sky-500 mx-4 font-bold text-xl border rounded-lg" : "bg-gray-300  mx-2 font-bold text-xl border rounded-lg"} text-white`}
                    onClick={() => handlePriorityChange(task.id, "high")}
                  >
                    High
                  </button>
                  <button
                    className={`priority_button ${task.priority === "medium" ? "bg-teal-500 mx-4 font-bold text-xl border rounded-lg" : "bg-gray-300 mx-2 font-bold text-xl border rounded-lg "} text-white `}
                    onClick={() => handlePriorityChange(task.id, "medium")}
                  >
                    Medium
                  </button>
                  <button
                    className={`priority_button ${task.priority === "low" ? "bg-pink-500 mx-4  font-bold text-xl border rounded-lg" : "bg-gray-300 font-bold text-xl border rounded-lg"} text-white`}
                    onClick={() => handlePriorityChange(task.id, "low")}
                  >
                    Low
                  </button>
                </div>
              </div>
              <div className="item_actions">
                <span title="Edit" onClick={() => setTask(task)}>
                  <EditIcon />
                </span>
                <span title="Delete" onClick={() => handleClickAction(task?.id, "delete")}>
                  <DeleteIcon />
                </span>
              </div>
            </li>
          ))}
      </ul>
     
    </div>
  );
};

const getPriorityColorClass = (priority) => {
  switch (priority) {
    case "high":
      return "mx-4";
    case "medium":
      return "mx-4";
    case "low":
      return "mx-4";
    default:
      return "";
  }
};

export default TodoList;
