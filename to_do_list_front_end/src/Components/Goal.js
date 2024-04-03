import Task from "./Task";
import {useState} from "react";
import {URL} from "../Constants/Constants";

function Goal({goal}){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    function displayalltasks(){
        return goal.tasks.map((t)=> <Task task={t} key={t.id}/>)
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
    }

    return (
        <div>
            <h1>{goal.name}</h1>
            <h2>{goal.description}</h2>
            {/*{displayalltasks()}*/}
            <form onSubmit={handleSubmit}>
                <label>název tasku:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>popis tasku:</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)}/>
                <button type="submit">vytvořit task</button>
            </form>
        </div>
    )
    }

export default Goal