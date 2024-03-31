import {useState} from "react";

function CreateGoal({goals, setGoals}){
    const [name, setGoals] = useState("")
    const [description, setDescription] = useState("")

    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch("http://localhost:8000/goals", {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: name, description: description})
        })
    }

}