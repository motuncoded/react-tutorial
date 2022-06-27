import * as React from "react";
import { useState } from "react";
import '../App.css';

const Read =()=>{
const [isOpen, setOpen ]= useState(false);

const handleToggle =()=>{
    setOpen(!isOpen);
}
    return(
        <div className="con">
            <button onClick={handleToggle}> Read more</button>
            {isOpen && <div>
                <p>Now paste in the config we just copied. Let’s initialize our app and services so that we can use Firebase throughout our app:</p>
                </div>}
        </div>
    )
}
export default Read;