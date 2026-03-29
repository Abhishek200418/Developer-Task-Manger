import React from "react";
import { useState } from "react";
import { addTask } from "../Services/api";

function AddTasks(){
    const [id,SetId]=useState("");
    const [task,SetTasks]=useState("");
    const [status,SetStatus]=useState("");
    const [date,SetDate]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newtask={
            task,
            status,
            date,
        }
        addTask(newtask)
        .then(()=>{
            alert("Task is added succesfull")
        })
    }
    return(
        <div>
            <h1>Add ur Tasks Here</h1>
            <form onSubmit={handleSubmit}>

            <label>task</label>
            <input type="text"
            value={task}
            placeholder="Enter the task"
            onChange={(e)=>SetTasks(e.target.value)}/>

            <label>Date</label>
            <input type="Date"
            value={date}
            onChange={(e)=>SetDate(e.target.value)}/>

            <label>Status</label>
            <select value={status} onChange={(e)=>SetStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                 <option value="Done">Done</option>
                  <option value="Progress">Progress</option>
            </select>

            <button type="submit">AddTask</button>

            </form>
        </div>
    )
}
export default AddTasks;