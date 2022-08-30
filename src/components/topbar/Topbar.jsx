import React from 'react'
import './Topbar.css'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <h2 className='logo'>
                        <b>FYP C105</b> Dashboard
                    </h2>
                </div>
                <div className="topRight">
                    <Link to="/" className="link">
                    <div className="topbarIcons">
                        <HomeIcon/>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}