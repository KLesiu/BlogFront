import React from "react";
import { Link } from "react-router-dom";

const Form=(props)=>{
    const register= async(event)=>{
       event.preventDefault();
        let name = document.querySelector("#registerName").value
        let pass = document.querySelector("#registerPass").value
        let cpass = document.querySelector("#registerCPass").value
        if(pass !== cpass){
            return console.log("Passwords arent same")
        }
       const response = await fetch("http://localhost:3001/api/auth/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name: name,
            password : pass,
            cpassword: cpass
        })
       })
       if(response.ok){
        return window.location.href= "/login"
       }
    }
    return(
        <form onSubmit={register}>
            <label htmlFor="name">Username:</label>
            <input id="registerName" name="name" type="text"></input>
            <label htmlFor="password">Password:</label>
            <input id="registerPass" type="password" name="password"></input>
            <label htmlFor="cpassword">Repeat password:</label>
            <input id="registerCPass" type="password" name="cpassword"></input>
            <button>REGISTER</button>
        </form>
    )
}
export default Form