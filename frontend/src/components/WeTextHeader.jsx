import React from 'react';
import Logo from '../assets/logo.jpg';
import CottageIcon from '@mui/icons-material/Cottage';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentTurnedInOutlined from '@mui/icons-material/AssignmentTurnedInOutlined';
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined';
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined';
import Search from '@mui/icons-material/Search';
import { Avatar, Button } from '@mui/material';

const WeTextHeader = () => {
  return (
    <div className='qHeader'>
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img src={Logo} alt="logo" />
          <div className="qHeader__icons">
            <div className="qHeader__icon"><CottageIcon /></div>
            <div className="qHeader__icon"><FeaturedPlayListIcon /></div>
            <div className="qHeader__icon"><AssignmentTurnedInOutlined /></div>
            <div className="qHeader__icon"><PeopleAltOutlined /></div>
            <div className="qHeader__icon"><NotificationsOutlined /></div>
          </div>
          <div className="qHeader__input">
            <Search/>
            <input type="text" placeholder='Search questions' />
          </div>
          {/* Avatar Div */}
          <div className='qHeader__Rem'>
             <Avatar src='' />
          </div>
          <Button>Add Questions</Button>
        </div>
      </div>
    </div>
  )
}

export default WeTextHeader
