import React from 'react';
import "./Widget.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widget() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">

      <div className="widgets__articleleft">
        <FiberManualRecordIcon/>
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
      {newsArticle("This is a news article test!")}
      {newsArticle("The James Webb telescope took some stunning images in 2023")}
      {newsArticle("Space station detectors found the source of weird blue jet lightning")}
      {newsArticle("OpenAI announces leadership transition Nov 17, 2023 November 17, 2023")}
    </div>
  )
}

export default Widget
