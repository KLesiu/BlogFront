import React, { useEffect, useState } from "react";

const Header=(props)=>{
    const [username,setUsername]= useState('')

    const logout=()=>{
        localStorage.removeItem("username")
        localStorage.removeItem('token')
        localStorage.removeItem('admin')
        setUsername('')
        document.querySelector('.logoutDiv').classList.add("hidden")
        
        window.location.href="http://localhost:3000/login"
        
        
    }
   
    useEffect(()=>{
        if(localStorage.getItem('username')){
            const name = localStorage.getItem('username')
            setUsername(name)
            const divRL = document.querySelector(".registerlogin")
            divRL.classList.add('hidden')
            const divLt = document.querySelector(".logoutDiv")
            divLt.classList.remove('hidden')
        }else{
            const divRL = document.querySelector(".registerlogin")
            divRL.classList.remove('hidden')
            const divLt = document.querySelector(".logoutDiv")
            divLt.classList.add('hidden')
        }
    },[])
    return(
        <header>
            <h1>FORD BLOG</h1>
            <div className="registerlogin hidden"><a href="/form"><button> Register</button> </a>
            <a href="/login"><button>Login</button></a></div>
            <div className="logoutDiv hidden">
                <h3>Welcome <span id="usernameHolder">{username}</span>!</h3>
                <button onClick={logout}>Logout</button>
            </div>

        </header>
    )
}
export default Header