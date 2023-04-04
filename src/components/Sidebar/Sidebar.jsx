import React from 'react'
import "./Sidebar.css"
import SidebarOption from '../SidebarOption/SidebarOption';

import Button from '@mui/material/Button';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import SnoozeOutlinedIcon from '@mui/icons-material/SnoozeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { IconButton } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DuoOutlinedIcon from '@mui/icons-material/DuoOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

import { useDispatch } from 'react-redux';
import { openSendMessage, closeSendMessage} from "../../features/mailSlice"

const Sidebar = () => {
    const dispatch = useDispatch()

  return (
    <div className='sidebar'>
        <Button
        onClick={()=>dispatch(openSendMessage())}
        className='sidebar__compose'
        startIcon={<ModeEditOutlineOutlinedIcon />}
        >
            Compose
        </Button>

        <SidebarOption selected={true} Icon={<InboxIcon />} title="Inbox" number={32}/>
        <SidebarOption  Icon={<StarBorderPurple500OutlinedIcon />} title="Starred" number={32}/>
        <SidebarOption  Icon={<SendOutlinedIcon />} title="sent" number={32}/>
        <SidebarOption  Icon={<SnoozeOutlinedIcon />} title="Snooze" number={32}/>
        <SidebarOption  Icon={<InsertDriveFileOutlinedIcon />} title="Drafts" number={32}/>
        <SidebarOption  Icon={<HorizontalSplitIcon />} title="Lists" number={32}/>
        <SidebarOption  Icon={<ExpandMoreOutlinedIcon />} title="More" number={32}/>

        <div className="sidebar__footer">
            <div className="sidebar__footerIcons">
                <IconButton>
                    <PersonOutlineOutlinedIcon />
                </IconButton>
                <IconButton>
                    <DuoOutlinedIcon />
                </IconButton>
                <IconButton>
                    <CallOutlinedIcon />
                </IconButton>
            </div>
        </div>


         

    </div>
  )
}

export default Sidebar