import Goal from "./Goal";
import {URL} from "../Constants/Constants";
function Goals({goals, setGoals}){
    function displayAllGoals(){
        return goals.map((g)=> <Goal goal={g} key={g.id} deleteGoal={deleteGoal}/>)
    }
    return (
        <div>
            {displayAllGoals()}
        </div>
    )

    async function deleteGoal(goalId){
        const response = await fetch(`${URL}/goals/${goalId}/delete_goal/`, {
            method:"DELETE",
        })
        if (response.ok){
            setGoals(goals=>goals.filter(goal=> goal.id !== goalId))
            console.log("cil smazan")
        }
        else{
            console.log("chyba odebrani cile")
        }

    }
}
export default Goals
