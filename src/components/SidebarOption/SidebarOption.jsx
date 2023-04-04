import { IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./SidebarOption.css"
import { useDispatch } from 'react-redux'
import { setPage } from '../../features/emailListSlice'
import { useHistory } from 'react-router-dom'

const SidebarOption = ({activeLink, setActiveLink,Icon, title, number}) => {
    const dispatch  = useDispatch()
    const history = useHistory()
    const currentPath = history.location.pathname
  


    const openSent = (title)=>{ 
      
            setActiveLink("sent")
            dispatch(setPage("sent"))
            history.push("/sent")
          
        
        


    }

    const openInbox= (title)=>{
        if(title=="Inbox"){
            setActiveLink("Inbox")
            dispatch(setPage("inbox"))
            history.push("/")

        }

        
    }


  return (
    <div  className={`sidebarOption ${activeLink==title && "sidebar__active"}`} onClick={()=>{title=='sent'?(openSent({title})):(openInbox(title)); }}  >
        <IconButton color={`default`} sx={{}}>
            {Icon}
        </IconButton>
        
        <div style={{fontSize:"15px", flex:1}}>
            {title}
        </div>

        <p>
            {number}
        </p>
    </div>
  )
}

export default SidebarOption