import Goal from "./Goal";
function Goals({goals}){
    function displayAllGoals(){
        return goals.map((g)=> <Goal goal={g} key={g.id}/>)
    }
    return (
        <div>
            {displayAllGoals}
        </div>
    )
}
export default Goals
