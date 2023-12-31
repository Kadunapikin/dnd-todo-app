import { useEffect, useState } from "react"
import CreateTasks from "./assets/components/CreateTasks";
import ListTasks from "./assets/components/ListTasks";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [tasks, setTasks] = useState([]);
console.log("tasks", tasks);

useEffect(() => {
  setTasks(JSON.parse(localStorage.getItem("tasks")))
}, [])

  return (
    <>
      <Toaster />
      <div className="bg-slate-100 w-screen h-screen flex flex-col items-center pt-32 gap-16">
      <CreateTasks tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>  
    </>
  )
}

export default App
