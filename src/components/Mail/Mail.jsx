import React from 'react'
import "./Mail.css"
import { Avatar, IconButton } from '@mui/material'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useHistory } from 'react-router-dom';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { selectOpenMail } from '../../features/mailSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';


const Mail = () => {


  const selectedMail = useSelector(selectOpenMail)
  console.log("selected mail => ", selectedMail)
  const history = useHistory()
  const iconSize = "small"
  const user = useSelector(selectUser)

  return (
    <div className='mail'>
      <div className="mail__tools">

        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.goBack()}>
            <KeyboardBackspaceOutlinedIcon fontSize={iconSize} />
          </IconButton>
          <IconButton>
            <ArchiveOutlinedIcon fontSize={iconSize} />
          </IconButton>
          <IconButton>
            <ReportGmailerrorredOutlinedIcon fontSize={iconSize} />
          </IconButton>
          <IconButton>
            <DeleteOutlineOutlinedIcon fontSize={iconSize} />
          </IconButton>
          <IconButton>
            <MailOutlineOutlinedIcon fontSize={iconSize} />
          </IconButton>
          <IconButton>
            <AccessTimeOutlinedIcon fontSize={iconSize} />
          </IconButton>
          <IconButton>
            <MoreTimeOutlinedIcon fontSize={iconSize} />
          </IconButton>
          <IconButton>
            <DriveFileMoveOutlinedIcon fontSize={iconSize} />
          </IconButton>
          <IconButton>
            <LabelOutlinedIcon fontSize={iconSize} />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon fontSize={iconSize} />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <KeyboardArrowLeftOutlinedIcon fontSize={iconSize} />
          </IconButton>
          <IconButton>
            <ChevronRightOutlinedIcon fontSize={iconSize} />
          </IconButton>
        </div>
      </div>

      <div className="mail__body">

        <div className="mail__bodyHeader">
          <h2>{selectedMail?.subject} </h2>

          <LabelImportantOutlinedIcon className='mail__important' />


        </div>


        <div className="mail__userInfo">

          <div className="mail__userInfoLeft">
            <Avatar src={user.photoURL} sx={{ marginRight: "20px" }} />
            <div className="userInfo__right">
              <div className="name__Section">
                <p className='userName'>{user.displayName}</p>
                <p>  {`<${user.email}>`}</p>
              </div>

              <p className='userEmail'>.to {`<${selectedMail?.title}>`}</p>
            </div>

          </div>
          <div className="mail__userInfoRight">
            <p>{selectedMail?.time}</p>
          </div>
        </div>


        <div className="mail__message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Mail