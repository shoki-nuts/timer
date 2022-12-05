import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';

const baseURL = 'http://localhost:3000/Posts'

export default Posts =()=>{
    const [post, setPost] = useState();

    useEffect(()=>{
        axios.get(`${baseURL}`).then((res)=>{
            setPost(res.data);
        })
    },[]);

}