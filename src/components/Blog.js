import React from "react";
import { useState,useEffect } from "react";
import uniqid from 'uniqid'

const Blog =(props)=>{
    const [posts,setPosts]= useState([])
    const [welcome,setWelcome]= useState(false)
    const [list,setList]= useState('')
    const getPosts = async()=>{
        const response = await fetch("http://localhost:3001/api/posts").then(function(data){
            return data.json()
        }).then(function(data){
            const count = data.length
            const array = []
            for(let i = 0;i<3;i++){
                array.push(data[i])

            }
            setPosts(array)
            setWelcome(true)
            return console.log(posts)
        })
    }

    if(welcome===false){
    return(
        <div id="welcome">
            <h2>Welcome in our world!</h2>
            <button onClick={getPosts}>SEE POSTS</button>
        </div>
        )
    }
    if(welcome===true){
        return(
            <div id="postCardsContainer">
                {posts.map((element)=>{
                    return (
                        <div className="postCard" key={uniqid()}>
                            <h3>{element.title}</h3>
                            <p>{element.body}</p>
                            <p>Created: {element.createdAt}</p>
                            <p>Last update: {element.updatedAt}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    
}
export default Blog