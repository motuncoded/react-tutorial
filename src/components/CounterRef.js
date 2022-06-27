import * as React from "react";
import { useRef } from "react";
import '../App.css';

const CounterRef =()=>{
const counter = useRef(0);

const handleCount =()=>{
    counter.current = counter.current +1
}
    return(
        <div className="con">
           <p> {counter.current}</p>
            <button onClick={handleCount}> +</button>
            <button onClick={handleCount}> -</button>

                </div>
    )
}
export default CounterRef;