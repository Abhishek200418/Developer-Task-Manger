import React from "react";
import { useState } from "react";
import { deleteTask } from "../Services/api";

function Deletetask(){
    const [Id,SetId]=useState("");
    
    const handleDelete=(e)=>{
        e.preventDefault();

        deleteTask(Id)
        .then(()=>{
            alert("the data was deleted")
        })


    }

    return(
        <div>
            <h1> delete the tasks here :</h1>
            <div id="form">
            <form onSubmit={handleDelete}>
                <div className="form">
                <label>Id</label>
                <input
                    type="text"
                    value={Id}
                    placeholder="enter the id"
                    onChange={(e)=>SetId(e.target.value)}
                />
</div>
                <button type="submit">delete the task</button>
            </form>
            </div>

        </div>
    )
}
export default Deletetask;