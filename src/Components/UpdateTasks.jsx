import React from "react";
import { useState } from "react";
import { updateTask } from "../Services/api";

function UpdateTasks(){

    const [id, SetId] = useState("");
    const [task, SetTask] = useState("");
    const [status, SetStatus] = useState("");
    const [date, SetDate] = useState("");

    const handleUpdate = (e)=>{
        e.preventDefault();

        const newupdatetask = {
            task,
            status,
            date
        };

        updateTask(id, newupdatetask)
        .then(()=>{
            alert("Task Updated Successfully");
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    return (
        <div>
            <h1>Update the details here</h1>
        <div id='form'>
            <form onSubmit={handleUpdate}>
<div className="form">
                <label>Id</label>
                <input
                    type="text"
                    value={id}
                    placeholder="enter the id"
                    onChange={(e)=>SetId(e.target.value)}
                />
                </div>
<div className="form">
                <label>Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e)=>SetDate(e.target.value)}
                />
                </div>
<div className="form">
                <label>Task</label>
                <input
                    type="text"
                    value={task}
                    placeholder="enter the task"
                    onChange={(e)=>SetTask(e.target.value)}
                />
                </div>
<div className="form">
                <label>Status</label>
                <select value={status} onChange={(e)=>SetStatus(e.target.value)}>
                    <option value="">Select Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Done">Done</option>
                    <option value="Progress">Progress</option>
                </select>
</div>
                <button type="submit">Update Task</button>

            </form>
            </div>
        </div>
    )
}

export default UpdateTasks;