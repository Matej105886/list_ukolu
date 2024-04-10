import Goals from "./Goals";
import {useState, useEffect} from "react";
import CreateGoal from "./CreateGoal";
import {URL} from "../Constants/Constants";

function ToDoList(){
    const [goals, setGoals] = useState([])
    async function fetchGoals(){
        const response = await fetch(`${URL}/goals/`)
        const goalsData = await response.json()
        console.log(JSON.stringify(goalsData))
        await setGoals(goalsData)
    console.log(JSON.stringify(goals))
    }
    useEffect(()=>{fetchGoals()}, [])
    return (
        <div>
            <Goals goals={goals} setGoals={setGoals}/>
            <CreateGoal goals={goals} setGoals={setGoals}/>
        </div>
    )
}
export default ToDoList