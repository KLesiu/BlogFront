import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

const PostDetail = (props)=>{
    const {id} = useParams()
    const [detail,setDetail]= useState('')
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
    useEffect(()=>{
        getDetail()
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
        </div>
    </div>
)
}
export default PostDetail