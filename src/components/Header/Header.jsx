import React from 'react'
import "./Header.css";


import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography } from '@mui/material';


const Header = () => {
  return (
    <div className='header'>

      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <img
          src="https://th.bing.com/th/id/R.f82954e97398fa6a025570c97249846f?rik=N1EQMq%2fK%2fE1ddA&pid=ImgRaw&r=0"
          alt="" />

        <Typography
          variant='h5'
          color='secondary'
          ml={"5px"}
        >Gmail</Typography>


      </div>

      <div className="header__middle">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder='Search mail' />
        <IconButton>
          <TuneIcon />
        </IconButton>
      </div>

      <div className="header__right">
        <IconButton>
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton>
          <AppsOutlinedIcon />
        </IconButton>

        <IconButton>
          <Avatar alt="Suman Pokhrel" src="" />

        </IconButton>

      </div>


    </div>
  )
}

export default Header