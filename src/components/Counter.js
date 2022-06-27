import * as React from "react";
import { useState } from "react";
import '../App.css';

const Counter =()=>{
const [count, setCount ]= useState(0);

const handleCount =()=>{
    setCount(count + 1);
}
const handleMinusCount =()=>{
    setCount(count - 1);
}
    return(
        <div className="con">
           <p> {count}</p>
            <button onClick={handleCount}> +</button>
            <button onClick={handleMinusCount}> -</button>

                </div>
    )
}
export default Counter;