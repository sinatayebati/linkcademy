import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({ name, description, message, photoUrl}) {
  return (
    <div className='post'>
      <div className="post__header">
        <Avatar />
        <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title='Line' color='gray'/>
        <InputOption Icon={ChatIcon} title='Comment' color='gray'/>
        <InputOption Icon={ShareIcon} title='Share' color='gray'/>
        <InputOption Icon={SendIcon} title='Send' color='gray'/>
      </div>
    </div>
  )
}

export default Post
