import React, { useEffect } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
    useLocation,
  } from "react-router-dom";
  import { useSelector, useDispatch } from 'react-redux'
  import { action1 } from "../../redux/actions/action1";
  import './posts.scss'


function Posts(props) {
    const dispatch = useDispatch()
    const postsdata = useSelector(state => state.action1key.data)
    const location = useLocation();

    const fetchposts = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts").catch((err) => console.log("error", err))
        dispatch(action1(response.data))
    } 

    useEffect(() => {
        fetchposts()
    }, []) 
    
    return (
        <div className="lists-inner-wrapper">
        {postsdata.map(d => {
            return(
            <div className="list-item">
                <div className="userid">User ID: {d.userId}</div>
                <div className="title">{d.title}</div>
            </div>
            )
        })}
      </div>
    );
  }
  
export default Posts