import { useEffect, useState } from "react";

const ListTasks = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([])
    const [inprogress, setInprogress] = useState([])
    const [completed, setCompleted] = useState([])


    return (
        <div>
            List Tasks
        </div>  
    )
}

export default ListTasks;
