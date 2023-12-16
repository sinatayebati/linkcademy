import React from 'react';
import "./Widget.css";
import InfoIcon from '@mui/icons-material/Info';

function Widget() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">

      <div className="widgets__articleleft">
        
      </div>

      <div className="widgets__articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>

    </div>
  )


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
