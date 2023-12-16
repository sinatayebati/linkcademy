import React from 'react';
import "./Widget.css";
import InfoIcon from '@mui/icons-material/Info';

function Widget() {
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkAcademy News</h2>
        <InfoIcon />
      </div>
    </div>
  )
}

export default Widget
