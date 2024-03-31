import Goals from "./Goals";
import {useState, useEffect} from "react";

function ToDoList(){
    const [goals, setGoals] = useState(["ahoj"])
    async function fetchGoals(){
        const response = await fetch("http://localhost:8000/goals/")
        const goalsData = await response.json()
        console.log(JSON.stringify(goalsData))
        await setGoals(goalsData)
    console.log(JSON.stringify(goals))
    }
    useEffect(()=>{fetchGoals()}, [])
    return (
        <div>
            <Goals goals={goals}/>
        </div>
    )
}
export default ToDoList