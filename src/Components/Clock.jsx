import React, { useState, useEffect } from "react";

function Clock() {

  const [clock, setClock] = useState(null);

  useEffect(() => {
    fetch("https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata")
      .then((res) => res.json())
      .then((data) => {
        setClock(data);
      });
  }, []);

  return (
    <div>
      <h1>Indian Time</h1>

      {clock && (
        <div>
          <p>Date: {clock.date}</p>
          <p>Time: {clock.time}</p>
        </div>
      )}

    </div>
  );
}

export default Clock;