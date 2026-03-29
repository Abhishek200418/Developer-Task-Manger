import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    return (
        
        <div id="nav">
            <h1>Developer Tasker</h1>
        <nav>
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tasks">View my tasks</Link></li>
                <li><Link to="/add">Add tasks</Link></li>
                <li><Link to="/update">UpdateTasks</Link></li>
                <li><Link to ="/delete">Delete tasks</Link></li>
            </ul>
        </nav>
        </div>

    )


}

export default Navigation;