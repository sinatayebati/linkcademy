import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import AboutImg from "../../assets/avatar/background.jpeg";

function Sidebar() {
  return (
    <div className='sidebar'>

        <div className="sidebar__top">
            <img src={AboutImg} alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Sina Tayebati</h2>
            <h4>stayeb3@uic.edu</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,576</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2,448</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar
