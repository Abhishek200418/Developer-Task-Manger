import React, { useState, useEffect } from "react";

function UserAPI(){

  const [user, setUser] = useState(null);

  useEffect(()=>{
    fetch("https://randomuser.me/api/")
      .then((res)=>res.json())
      .then((data)=>setUser(data.results[0]));
  },[])

  return(
    <div>
      <h2>User Details</h2>

      {user && (
        <div>
          <p>Name: {user.name.first}</p>
          <p>Email: {user.email}</p>
          <p>Country: {user.location.country}</p>
        </div>
      )}

    </div>
  );
}

export default UserAPI;