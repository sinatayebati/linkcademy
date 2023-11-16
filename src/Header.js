import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
    <div className='header'>

        <div className='header__left'>
          <img src={require('./assets/LinkAcademy-logos.jpg')} alt="" />

          <div className='header__search'>
            <SearchIcon />
            <input type="text" />
          </div>
        </div>

        <div className='header__right'>

        </div>
    </div>
  )
}

export default Header
