import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {URL} from "../Constants/Constants";

function EditGoal(){
    const {goalId} = useParams()
    const navigate = useNavigate()
    const [goal, setGoal] = useState({name:"", description:""})

    function handleChange(e) {
        const {key, value} = e.target
        setGoal(goal=>({...goal, key:value}))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(`${URL}/goals/${goalId}/edit_goal/`, {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(goal)

        })
        if (response.ok){
            navigate("/")
            console.log("cil upraven")
        }
        else{
            console.log("chyba pridavani cile")
        }
    }
    async function fetchGoal(){
        const response = await fetch(`${URL}/goals/${goalId}/get_goal/`)
        const goalData = await response.json()
        console.log(JSON.stringify(goalData))
        await setGoal(goalData)
        console.log(JSON.stringify(goal))
    }
    useEffect(()=>{fetchGoal()}, [])

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>název cíle:</label>
                <input type="text" value={goal.name} onChange={handleChange}/>
                <label>popis cíle:</label>
                <textarea value={goal.description} onChange={handleChange}/>
                <button type="submit">potvrdit cíl</button>
            </form>
        </div>
    )
}
export default EditGoal