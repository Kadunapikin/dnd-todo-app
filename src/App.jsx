import { useState } from "react"
import CreateTask from "./assets/components/CreateTask";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="bg-purple-300">
      <CreateTask tasks={tasks} setTasks={setTasks} />
    </div>  
  )
}

export default App
