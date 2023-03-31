import React from 'react'
import "./Section.css"
import { IconButton } from '@mui/material'

const Section = ({Icon, color, title, selected}) => {
  return (
    <div className={`section ${selected ? 'selected':''}`}
    style={{
        color:`${selected? color : ""}`
    }}
    >
        <IconButton>
            <Icon />
        </IconButton>
        <p>{title}</p>
    </div>
  )
}

export default Section