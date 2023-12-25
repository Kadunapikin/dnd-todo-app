import { useEffect, useState } from "react";
import Section from "./Section";

const ListTasks = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([]);
    const [inProgress, setInprogress] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        const fTodos = tasks.filter(task => task.status === "todo");
        const fInprogress = tasks.filter(task => task.status === "inprogress");
        const fCompleted = tasks.filter(task => task.status === "completed");
        setTodos(fTodos);
        setInprogress(fInprogress);
        setCompleted(fCompleted);
    }, [tasks])

    const statuses = ["Todo", "Inprogress", "Completed"];

    return (
        <div className="flex gap-16">
            {statuses.map((status, index) => (
            <Section 
            key={index} 
            status={status}
            tasks={tasks}
            setTasks={setTasks}
            todos={todos}
            inprogress={inProgress}
            completed={completed}
            />
            ))}
        </div>  
    )
}

export default ListTasks;
