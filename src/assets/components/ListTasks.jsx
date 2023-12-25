import { useEffect, useState } from "react";

const ListTasks = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([]);
    const [inprogress, setInprogress] = useState([]);
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
        <div>
            {statuses.map((status, index) => (
            <Section key={index} status={status} />
            ))}
        </div>  
    )
}

export default ListTasks;
