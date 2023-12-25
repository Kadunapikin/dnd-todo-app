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


    return (
        <div>
            List Tasks
        </div>  
    )
}

export default ListTasks;
