import { useEffect, useState } from "react";


const TodoList = () => {

    const [filter, setFilter] = useState("all");

  const tasks = [
    { id: 1, text: "Meet friend", isCompleted: true },
    { id: 2, text: "Lunch meeting", isCompleted: false },
    { id: 3, text: "Build app", isCompleted: false }
  ];

  const filteredTasks = tasks.filter(task => {
    if(filter === "all") {
      return true;
    }
    if(filter === "complete" && task.isCompleted) {
      return true;  
    }
    if(filter === "incomplete" && !task.isCompleted) {
      return true;
    }
    return false;
  });
  
    return (
        <div className="mx-auto w-full">
      <div className="mb-4 flex justify-center gap-4">
        <button
          className={`border p-2 ${filter === "all" ? "bg-black text-white" : ""}`} 
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`border p-2 ${filter === "complete" ? "bg-black text-white" : ""}`}
          onClick={() => setFilter("complete")}  
        >
          Complete
        </button>
        <button
          className={`border p-2 ${filter === "incomplete" ? "bg-black text-white" : ""}`}
          onClick={() => setFilter("incomplete")}
        >
          Incomplete
        </button>
      </div>

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <label>
              <input type="checkbox" checked={task.isCompleted} />
              <span>{task.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default TodoList;