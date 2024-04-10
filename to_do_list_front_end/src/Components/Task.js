function Task({task, deleteTask}){
    function handleDeleteTask() {
       if (window.confirm("chcete opravdu odstrnit task?")){
           deleteTask(task.id)
       }

    }

    return(
        <div>
            <h1>{task.title}</h1>
            <h2>{task.description}</h2>
            <button type="button" onClick={handleDeleteTask}>odstranit task</button>
        </div>
    )
}

export default Task
