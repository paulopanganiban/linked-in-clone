import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ImageIcon from '@material-ui/icons/Image';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import Post from './Post';
import { db } from '../firebase'
import firebase from 'firebase'
function Feed() {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])
    useEffect(() => {
        // real time listener
        // directly mapped to post state
      db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => (
          setPosts(snapshot.docs.map(doc => (
              // using parenthesis in arrow function
              // means return
              {
                  id: doc.id,
                  data: doc.data()
              }
          )))
      ))
    }, [])
    function sendPost(event) {
        event.preventDefault()
        db.collection('posts')
        .add({
            // add an object
            name: 'John Paulo Panganiban',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase
            .firestore
            .FieldValue
            .serverTimestamp(),
        })
        setInput('')
    }
    return (
        <FeedContainer>
            <FeedInputContainer>
                <div className="feed__input">
                    <CreateIcon />
                    <form onSubmit={sendPost}>
                        <input type="text" value={input}
                        onChange={e => setInput(e.target.value)} />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption
                        color='#70B5F9'
                        title='Photo'
                        Icon={ImageIcon} />
                    <InputOption
                        color='#E7A33E'
                        title='Video'
                        Icon={SubscriptionsIcon} />
                    <InputOption
                        color='#C0CBCD'
                        title='Event'
                        Icon={EventNoteIcon} />
                    <InputOption
                        color='#7Fc15E'
                        title='Write article'
                        Icon={ViewDayIcon} />
                </div>
            </FeedInputContainer>
            {posts.map(({ id, data: { name, description, message,
            photoUrl }}) => (
                <Post 
                key={id}
                name={name}
                description={description}
                message={message} 
                photoUrl={photoUrl}/>
            ))}
        </FeedContainer>
    )
}

export default Feed
const FeedInputContainer = styled.div`
background-color: #fff;
padding: 10px;
padding-bottom: 20px;
border-radius: 10px;
margin-bottom: 20px;
 > .feed__inputOptions {
     margin-top: 5px;
     display: flex;
     justify-content: space-evenly;
 }
 > .feed__input {
     border: 1px solid lightgray;
    border-radius: 30px;
    display: flex;
    padding: 10px;
    color: gray;
    padding-left: 15px;
 }
 > .feed__input > form {
  display: flex;
  width: 100%;
 }
 > .feed__input > form > button {
     display: none;
 }
 > .feed__input > form > input {
     border: none;
     flex: 1;
     margin-left: 10px;
     outline-width: 0;
     font-weight: 600;
 }
`
const FeedContainer = styled.div`
flex: 0.6;
margin: 0 20px;
`