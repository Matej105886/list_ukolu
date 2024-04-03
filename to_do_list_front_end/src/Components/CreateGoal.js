import {useState} from "react";
import {URL} from "../Constants/Constants";

function CreateGoal({goals, setGoals}){
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch(`${URL}/goals/`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: name, description: description})

        })
        if (response.ok){
            const nGoal = await response.json()
            setGoals([...goals, nGoal])
            console.log("cil pridan")
        }
        else{
            console.log("chyba pridavani cile")
        }

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>název cíle:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <label>popis cíle:</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)}/>
                <button type="submit">vytvořit cíl</button>
            </form>
        </div>
    )

}
export default CreateGoal