import React from "react";
import WeatherCard from "../Components/WeatherCard";
import Clock from "../Components/Clock";
import '../Styles/Home.css'
import QuoteCard from "../Components/ QuoteCard";


function Home(){
    return(
    <div>
      <h1>Welcome to developer Taskbar</h1>

        <div id="Widgets">

   <div className="widget">
      <Clock/>
   </div>

   <div className="widget">
      <WeatherCard/>
   </div>
   <div className="widget">
      <QuoteCard/>
   </div>

</div>

        <h1>Service we provide</h1>
<div id="Services">

   <div className="service">
      Present tasks
   </div>

   <div className="service">
      Add tasks
   </div>

   <div className="service">
      Update tasks
   </div>

   <div className="service">
      Delete tasks
   </div>

</div>

    </div>
    )
}

export default Home;