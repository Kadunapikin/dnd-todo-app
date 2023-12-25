import Header from "./Header";

const Section = ({ status, tasks, setTasks, todos, inprogress, completed }) => {
    const text = "Todo";
    const bg = "bg-slate-500";
    return(
        <div>
            <Header text={text} bg={bg} count={todos.length} /> List
        </div>
    )
}
export default Section;