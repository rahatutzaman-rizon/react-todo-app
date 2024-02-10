import Tabs from "./Components/Tabs/Tabs"
import TodoForm from "./Components/TodoForm/TodoForm"
import TodoList from "./Components/TodoList/TodoList"



function App() {
  return (
    <>
     <div className="flex gap-6 text-center bg-green-100 h-24">
     <TodoList></TodoList>
     <TodoForm></TodoForm>
     <Tabs></Tabs>
     
   
     </div>
    </>
  )
}

export default App
