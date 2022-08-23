import React, { useEffect, useState } from "react";
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


function Comments(props) {
    const dispatch = useDispatch()
    const commentsdata = useSelector(state => state.action2key.data[0] || [])
    const [count, setcount] = useState(0)

    const fetchcomments = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments").catch((err) => console.log("error", err))
        dispatch(action2(response.data))
    } 

    const handleScroll = () => {
      let userScrollHeight = window.innerHeight + window.scrollY;
      let windowBottomHeight = document.querySelector('.lists-wrapper').offsetHeight;
      if (userScrollHeight >= windowBottomHeight) {
          setcount(prevcount => prevcount+1)
      }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        fetchcomments()
    }, []) 

    return (
        <div className="lists-inner-wrapper">
        {commentsdata.slice(0, 20 + 20*count).map(d => {
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
  
export default Comments