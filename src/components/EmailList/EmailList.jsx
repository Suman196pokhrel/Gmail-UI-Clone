import { CheckBox } from '@mui/icons-material'
import React from 'react'
import "./EmailList.css"
import Section from '../Section/Section';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { IconButton } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const EmailList = () => {
  return (
    <div className='emailList'>

      <div className="emailList__settings">

        <div className="emailList__settingsLeft">
          <IconButton>
            <CheckBox />
            <ArrowDropDownIcon />
          </IconButton>

          <IconButton>
            <RefreshOutlinedIcon />
          </IconButton>

          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>

        </div>

        <div className="emailList__settingsRight">
          <IconButton>
            <KeyboardArrowLeftOutlinedIcon />
          </IconButton>
          <IconButton>
            <ChevronRightOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} color='rgb(12, 93, 254)' title='Primary' selected={true}/>
        <Section Icon={LocalOfferOutlinedIcon} color='rgb(12, 93, 254)' title='Promotions' selected={false}/>
        <Section Icon={PeopleAltOutlinedIcon} color='rgb(12, 93, 254)' title='Socials' selected={false}/>

      </div>
    </div>
  )
}

export default EmailList