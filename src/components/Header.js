import React, { useEffect, useState } from "react";

const Header=(props)=>{
    const [username,setUsername]= useState('')
   
    useEffect(()=>{
        if(localStorage.getItem('username')){
            const name = localStorage.getItem('username')
            setUsername(name)
            const divRL = document.querySelector(".registerlogin")
            divRL.classList.add('hidden')
        }else{
            const divRL = document.querySelector(".registerlogin")
            divRL.classList.remove('hidden')
        }
    },[])
    return(
        <header>
            <h1>FORD BLOG</h1>
            <div className="registerlogin hidden"><a href="/form"><button> Register</button> </a>
            <a href="/login"><button>Login</button></a></div>
            <div>
                <h3>{username}</h3>
            </div>

        </header>
    )
}
export default Header