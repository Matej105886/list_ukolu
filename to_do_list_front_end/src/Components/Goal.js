import Task from "./Task";
import {useState} from "react";
import {URL} from "../Constants/Constants";
import {Link} from "react-router-dom";

function Goal({goal:inicialGoal, deleteGoal}){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [goal, setGoal] = useState(inicialGoal)
    function displayalltasks(){
        return goal.tasks.map((t)=> <Task task={t} key={t.id} deleteTask={deleteTask}/>)
    }

    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch(`${URL}/tasks/${goal.id}/add_task/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title: title, description: description})

        })
        if (response.ok){
            const nTask = await response.json()
            setGoal(goal=>({...goal, tasks:[...goal.tasks, nTask]}))
            console.log("cil pridan")
        }
        else{
            console.log("chyba pridavani cile")
        }

    }

    function handleDeleteGoal() {
        if (window.confirm("chcete opravdu odstrnit goal?")){
            deleteGoal(goal.id)
        }
    }

    async function deleteTask(taskId){
        const response = await fetch(`${URL}/tasks/${taskId}/delete_task/`,{
            method:"DELETE",
        })

        if (response.ok){
            setGoal(goal=>({...goal, tasks: goal.tasks.filter(task=> task.id !== taskId)}))
            console.log("task odebran")
        }
        else{
            console.log("chyba odebrani tasku")
        }
    }


    return (
        <div>
            <h1>{goal.name}</h1>
            <h2>{goal.description}</h2>
            {displayalltasks()}
            <form onSubmit={handleSubmit}>
                <label>název tasku:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>popis tasku:</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)}/>
                <button type="submit">vytvořit task</button>
                <button type="button" onClick={handleDeleteGoal}>odstranit goal</button>
            </form>
            <Link to={`/edit_goal/${goal.id}/`}>
                <button>edit goal</button>
            </Link>
        </div>
    )
}

export default Goal