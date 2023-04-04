import React, { useState } from 'react'
import "./Header.css";


import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Card, CardContent, CardHeader, Divider, IconButton, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useDispatch } from 'react-redux';
import { auth } from '../../utils/firebaseConfig';

const Header = () => {
  const user = useSelector(selectUser)
  const [anchorEl, setAnchorEl] = useState(null)
  const dispatch = useDispatch()

  // PopOver Handlers
  const handleClickAvatar = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const signOut = ()=>{
    auth.signOut()
    .then(()=>{
      dispatch(logout())

    })
  }

  // console.log(user)

  return (
    <div className='header'>

      <div className="header__left">
        <IconButton>
          <MenuIcon fontSize='medium'/>
        </IconButton>

        <img
          src="https://th.bing.com/th/id/R.f82954e97398fa6a025570c97249846f?rik=N1EQMq%2fK%2fE1ddA&pid=ImgRaw&r=0"
          alt="" />

        <Typography
          
          sx={{
            color:"rgb(92, 92, 92)",
            fontSize:"24px"

          }}
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

        <IconButton onClick={handleClickAvatar}>
          <Avatar alt="Suman Pokhrel" src={user.photoURL} />
        </IconButton>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}

        >
          <Card>
            <CardHeader
              avatar={
                <Avatar src={user.photoURL} />
              }
              title={user.displayName}
              subheader={user.email}
            >

            </CardHeader>
            <Divider />

            <CardContent>
              <Box sx={{ display: "flex", flexDirection: "column" }}>

                <Button variant='text' sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5px 10px 5px", height: "100%", cursor: `pointer` }}>
                  <PersonAddAltIcon fontSize='medium' sx={{ color: "rgb(84, 84, 84)" }} />
                  <Typography sx={{textTransform:`none`}}  color={`gray`}>Add another account</Typography>
                </Button>
                <Button onClick={signOut} variant='text' sx={{textTransform:`non` ,display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5px 10px 5px", height: "100%", cursor: `pointer` }}>
                  <LogoutIcon fontSize='medium' sx={{ color: "rgb(84, 84, 84)" }} />
                  <Typography sx={{textTransform:`none`}} color={`gray`}>Sign out of all accounts</Typography>
                </Button>
                
              </Box>

            </CardContent>

          </Card>
        </Popover>

      </div>


    </div>
  )
}

export default Header