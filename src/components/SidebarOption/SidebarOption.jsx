import { IconButton, Typography } from '@mui/material'
import React from 'react'
import "./SidebarOption.css"

const SidebarOption = ({selected,Icon, title, number}) => {
  return (
    <div className={`sidebarOption ${selected && "sidebar__active"}`}>
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