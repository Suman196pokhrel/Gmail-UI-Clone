import { IconButton, Typography } from '@mui/material'
import React from 'react'
import "./SidebarOption.css"
import { useDispatch } from 'react-redux'
import { setPage } from '../../features/emailListSlice'
import { useHistory } from 'react-router-dom'

const SidebarOption = ({selected,Icon, title, number}) => {
    const dispatch  = useDispatch()
    const history = useHistory()


    const openSent = ()=>{
        dispatch(setPage("sent"))
        history.push("/sent")
        console.log("Clicked sent")


    }

    const openInbox= ()=>{
        dispatch(setPage("inbox"))
        history.push("/")
        console.log("Clicked inbox")
    }


  return (
    <div className={`sidebarOption ${selected && "sidebar__active"}`} onClick={title=='sent'?(openSent):(openInbox)}>
        <IconButton color={`default`}>
            {Icon}
        </IconButton>
        
        <Typography variant='body'sx={{
            marginLeft:1
        }}>
            {title}
        </Typography>

        <p>
            {number}
        </p>
    </div>
  )
}

export default SidebarOption