import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import '../App.css';

const QuoteGenerator =()=>{
    const [quote, setQuote] = useState("");
     const fetchQuote = () =>{
         axios.get("https://api.adviceslip.com/advice").then((response)=>{
             console.log(response.data.slip.advice);
             setQuote(response.data.slip.advice);
         })
         
     }
     useEffect(() => {
        fetchQuote()
        
        }, [4000])
        

    return(
        <div className="con">
            <span>
                <p>{quote}</p>
            </span>
            <button onClick={fetchQuote}>click here</button>
        
        </div>
    )
}
export default QuoteGenerator;