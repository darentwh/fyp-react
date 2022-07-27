import React from 'react'
import './Sidebar.css'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
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
                        Menu
                    </h4>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LooksOneIcon className="sidebarListItemIcon"/>
                            foo
                        </li>
                        <li className="sidebarListItem">
                            <LooksTwoIcon className="sidebarListItemIcon"/>
                            bar
                        </li>
                        <li className="sidebarListItem">
                            <Looks3Icon className="sidebarListItemIcon"/>
                            baz
                        </li>
                    </ul>
                    <h4 className="siderbarTitle">
                        Functions
                    </h4>
                    <ul className="sidebarList">
                        <Link to="/forecasting" className="link">
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarListItemIcon"/>
                            Forecasting
                        </li>
                        </Link>
                        <Link to="/mps" className="link">
                        <li className="sidebarListItem">
                            <EventNoteIcon className="sidebarListItemIcon"/>
                            Master Production Scheduling
                        </li>
                        </Link>
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