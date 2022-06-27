import React, { useState } from "react"; 
import '../App.css';

export default function FormInput(){
    const [email, setEmail] = useState("")

 const [password, setPassword] = useState("")

    return(
        <div className="con">
<div className="wrapper">
    <div className="row">
        <label htmlFor="email"> Name  </label>
        <input type="email"  placeholder="Email..."/>
    </div>
    <div className="row">
    <label htmlFor="password"> Password  </label>

    <input type="email" placeholder="Password..."/>
        

    </div>
    <button>Sumbit</button>
</div>
</div>
    )
}