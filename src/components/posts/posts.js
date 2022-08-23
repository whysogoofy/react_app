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
  import { action1 } from "../../redux/actions/action1";
  import './posts.scss'


function Posts(props) {
    const dispatch = useDispatch()
    const postsdata = useSelector(state => state.action1key.data)
    const location = useLocation();
    const [count, setcount] = useState(0)

    const fetchposts = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts").catch((err) => console.log("error", err))
        dispatch(action1(response.data))
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
        fetchposts()
    }, [])
    
    return (
        <div className="lists-inner-wrapper">
        {postsdata.slice(0, 20 + 20*count).map((d, i) => {
            return(
            <div className="list-item" key={d.id}>
                <div className="userid">User ID: {d.userId}</div>
                <div className="title">{d.title}</div>
            </div>
            )
        })}
      </div>
    );
  }
  
export default Posts