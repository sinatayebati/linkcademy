import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>

        <div className='header__left'>
          {/* <img src={require('./assets/logo-02/LinkAcademy-logos_transparent.png')} alt="" /> */}
          <div className='home__img'></div>

          <div className='header__search'>
            <SearchIcon />
            <input type="text" />
          </div>
        </div>

        <div className='header__right'>
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Chat"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption avatar='./src/assets/avatar/about2.png' title="Me"/>
        </div>
    </div>
  )
}

export default Header
