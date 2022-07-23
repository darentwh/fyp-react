import React from 'react'
import './Sidebar.css'
import TimelineIcon from '@mui/icons-material/Timeline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from "react-router-dom";

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="siderbarMenu">
                    <h4 className="siderbarTitle">
                        Dashboard
                    </h4>
                    <ul className="sidebarList">
                        <Link to="/forecasting" className="link">
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarListItemIcon"/>
                            Forecasting
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <EventNoteIcon className="sidebarListItemIcon"/>
                            Master Production Scheduling
                        </li>
                        <li className="sidebarListItem">
                            <InventoryIcon className="sidebarListItemIcon"/>
                            Material Requirement Planning
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}