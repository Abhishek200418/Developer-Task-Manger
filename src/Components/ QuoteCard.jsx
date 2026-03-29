import React from "react";
import { useState,useEffect } from "react";
 function QuoteCard(){
    const [Quote,setQuote]=useState(null)

    useEffect(()=>{
        fetch("https://dummyjson.com/quotes/random")
        .then((res)=>res.json())
        .then((data)=>setQuote(data))
    },[])

    return (
        <div>
        <h1>Quote</h1>
        {(Quote&&(
            <div>
             <p>{Quote.quote}</p>   
            </div>
        
        )
        )}
        </div>
    )
 }

 export default QuoteCard;