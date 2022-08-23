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
  import { action2 } from "../../redux/actions/action2";
  import './comments.scss'


function Posts(props) {
    const dispatch = useDispatch()
    const commentsdata = useSelector(state => state.action2key.data[0] || [])
    const location = useLocation();

    const fetchcomments = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments").catch((err) => console.log("error", err))
        dispatch(action2(response.data))
    } 

    useEffect(() => {
        fetchcomments()
    }, []) 

    console.log('dekho', commentsdata)

    return (
        <div className="lists-inner-wrapper">
        {commentsdata.map(d => {
            return(
            <div className="list-item">
                <div className="id-wrapper">
                <div className="name">Name: {d.name}</div>
                <div className="email">Email: {d.email}</div>
                </div>
                <div className="title">{d.body}</div>
            </div>
            )
        })}
      </div>
    );
  }
  
export default Posts