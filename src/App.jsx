import { useState } from "react"
import CreateTasks from "./assets/components/CreateTasks";
import ListTasks from "./assets/components/ListTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="bg-purple-300">
      <CreateTasks tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </div>  
  )
}

export default App
