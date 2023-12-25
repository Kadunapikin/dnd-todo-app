import Header from "./Header";

const Section = ({ status, tasks, setTasks, todos, inProgress, completed }) => {
    let text = "Todo";
    let bg = "bg-slate-500";
    let tasksToMap = todos;

    if(status === "Inprogress") {
        text = "In Progress";
        bg = "bg-purple-500";
        tasksToMap = inProgress;    
    }

    if(status === "Completed") {
        text = "Completed";
        bg = "bg-green-500";
        tasksToMap = completed;    
    }

    return(
        <div className="w-64">
            <Header text={text} bg={bg} count={todos.length} /> List
        </div>
    )
}
export default Section;