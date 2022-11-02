import React from 'react';
import './CSS/Sidebar.css' 
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from "./SidebarChat";



function Sidebar() {
    return (
        <div className ="sidebar">
            <div className="sidebar_header">
                <IconButton>
                <Avatar src={`${process.env.PUBLIC_URL}/Emmah.jpg`}  />
                </IconButton>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className = "sidebar_search">
                <div className = "sidebar_searchContainer">
                    <SearchIcon/>
                    <input placeholder = "Search or start new chart" type = "text"/>
                </div>     
            </div>
            <div className = "sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>

        </div>
    );
}


export default Sidebar;