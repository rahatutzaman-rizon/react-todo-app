import Tabs from "./Components/Tabs/Tabs"
import TodoForm from "./Components/TodoForm/TodoForm"
import TodoList from "./Components/TodoList/TodoList"



function App() {
  return (
    <>
     <div className=" gap-6 text-center bg-green-100 h-24 mt-6">
     <TodoForm></TodoForm>
     <Tabs></Tabs>
     <TodoList></TodoList>
     
     
     
   
     </div>
    </>
  )
}

export default App
