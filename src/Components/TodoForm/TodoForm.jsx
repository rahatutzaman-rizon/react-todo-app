
const TodoForm = () => {
    return (
        <div>
             <form >
             <div>
             <h2>todo</h2>
             <input className="mt-8" type="text"  placeholder="write the task" name="task" />
             </div>
              <div className="">
               <button className="bg-pink-300 w-12 rounded"> add</button>
              </div>
             </form>
        </div>
    );
};

export default TodoForm;