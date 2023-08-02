import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import uniqid from 'uniqid'

const PostDetail = (props)=>{
    const {id} = useParams()
    const [detail,setDetail]= useState('')
    const [comments,setComments]=useState([])
    const [showAllComments,setShowAllComments]=useState('')
    const getDetail = async()=>{
        const res = await fetch(`http://localhost:3001/api/posts/${id}`).then(function(ele){
            return ele.json()
        }).then((data)=>{
            return setDetail({
                body: data.body,
                createdAt: data.createdAt,
                published: data.published,
                title:data.title,
                updatedAt:data.updatedAt,
                _id:data._id
            })
        })
    }
    const getComments = async()=>{
        
        const res = await fetch(`http://localhost:3001/api/posts/${id}/comments`).then(function(ele){
            
           return ele.json()
        }).catch((err)=>{
            return err
        }).then((data)=>{
            
                
                if(data=== 'This post doesnt have any comments'){
                    return
                }
                const arr = []
                comments.map((ele)=>{
                    arr.push(ele)
                })
                data.map((ele)=>{
                    arr.push(ele)
                })
                
                return setComments(arr)

            }
            
        )
       
    }
    const showCommentForm=()=>{
        const div = document.querySelector(".addCommentContainer")
        div.classList.toggle("hidden")
    }
    const addComment= async()=>{
        const post = id
       
        const body = document.querySelector('.newComment').value
        const token = localStorage.getItem('token')
        
        const response = await fetch(`http://localhost:3001/api/posts/${post}/add-comment`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token} `
            },
            body:JSON.stringify({
               body:body 
            })
        }).then(function(res){
           
            return res.json()
        })
      
       location.reload(true)
        
    }   
    
    useEffect(()=>{
        getDetail()
        getComments()
        
    },[])
    
return(
    <div className="detailContainer">
        <div className="detailBox">
        <h2>{detail.title}</h2>
        <p>Created at: {detail.createdAt};  Last Update: {detail.updatedAt}</p>
        <p>{detail.body}</p>
        </div>
        <div className="commentsBox">
            <h2>Comments:</h2>
            <ul id="commentsHolder">
            {    
                comments.map((ele)=>{
                  
                    return(
                        <li className="comment" key={uniqid()}>
                            <h3>{ele.username}</h3>
                            <p>{ele.body}</p>
                        </li>
                    )
                })
            }</ul>
            <div className="addCommentContainer hidden">
            <textarea name="newComment" className="newComment"/>
            <button onClick={addComment}>ADD</button>
            </div>
            
            <button onClick={showCommentForm}  className="addComment">Add comment</button>
        </div>
    </div>
)
}
export default PostDetail