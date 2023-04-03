import React from 'react'
import "./EmailRow.css"
import { IconButton } from '@mui/material'
import { CheckBox } from '@mui/icons-material'
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { useHistory } from 'react-router-dom';


const EmailRow = ({ title, subject, description, time }) => {
  const history = useHistory()
  const descLimit = 120
  const timeReadable = new Date(time).toLocaleString()


  return (
    <div onClick={()=> history.push("/mail")} className='emailRow'>
      <div className="emailRow__options">
        <IconButton>
          <CheckBox />
        </IconButton>
        <IconButton>
          <StarBorderPurple500OutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelOutlinedIcon />
        </IconButton>
      </div>

      <h3 className="emailRow__title">
        {title}
      </h3>

      <div className="emailRow__message">
        <h4>{subject}
        <span className="emailRow__description">-
          {description.length > descLimit ? description.slice(0, descLimit) + "..." : description}
        </span>
        </h4>
       
      </div>



      <p className="emailRow__time">
        {timeReadable}
      </p>
    </div>
  )
}

export default EmailRow