import React from "react";
import { useState,useEffect } from "react";
import { getAllNotes } from "../Services/api";


function GetAllNotes(){
    const [Notes,SetNotes]=useState([])
    useEffect(()=>{
        getAllNotes()
        .then((res)=>{
            SetNotes(res.data)
        })
    },[])
return (
    <div>
        <h1>Notes</h1>
        {Notes.map((N)=>{
            return(
                <div key={N.id}>
                    <p>{N.title}</p>
                    <p>{N.content}</p>
                    <p>{N.created_at}</p>
                 </div>
            )
        })}
    </div>
)

}
export default GetAllNotes;