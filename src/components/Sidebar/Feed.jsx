import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from '../../firebase';


function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    ))
  }, [])

  const sendPost = (e) => {
    e.preventDefault();
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon />
            <form>
                <input type="text" />
                <button onClick={sendPost} type='submit'>Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
          <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
          <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD"/>
          <InputOption Icon={CalendarViewDayIcon} title='Write' color="#7FC15E"/>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => {
        <Post />
      })}

      <Post
      name="Sina Tayebati"
      description="this is a test"
      message="This works"
      />
    </div>
  )
}

export default Feed
