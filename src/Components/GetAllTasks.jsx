import React from "react";
import { useState,useEffect } from "react";
import { getAllTask } from "../Services/api";

function GetAllTasks(){
    const [Tasks,Settasks]=useState([]);
    useEffect(()=>{
        getAllTask()
        .then((res)=>{
            Settasks(res.data)
        })
    },[])
    return (
        <div>
        <h1>Tasks</h1>
       
        <div id="tasksContainer">

  {Tasks.map((t) => {
    return (
      <div key={t.id} className="taskCard">

        <p className="taskTitle">TaskName: {t.task}</p>
        <p className="taskStatus">Status: {t.status}</p>

      </div>
      
    )
  })}

</div>
 </div>
    )
}
export default GetAllTasks;