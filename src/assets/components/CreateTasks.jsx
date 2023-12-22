
const CreateTasks = ({ tasks, setTasks }) => {
    return (
        <form>
            <input type="text" className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1" />
            <button className="bg-cyan-500 h-12 rounded-md px-4">Create</button>
        </form>
    )
}

export default CreateTasks;
