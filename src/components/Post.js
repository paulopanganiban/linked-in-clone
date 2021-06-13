import { Avatar } from '@material-ui/core'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import InputOption from './InputOption'
function Post({ name, description, message, photoUrl}) {
    return (
        <PostContainer>
            <div className="post__header">
                <Avatar/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message }</p>
            </div>
            <PostButtons>
                <InputOption 
                Icon={ThumbUpAltOutlined} 
                title="Like" 
                color='gray'/>
                <InputOption 
                Icon={ChatOutlined} 
                title="Comment" 
                color='gray'/>
                <InputOption 
                Icon={ShareOutlined} 
                title="Share" 
                color='gray'/>
                <InputOption 
                Icon={SendOutlined} 
                title="Send" 
                color='gray'/>
            </PostButtons>
        </PostContainer>
    )
}

export default Post
const PostButtons = styled.div`
display: flex;
justify-content: space-evenly;
`
const PostContainer = styled.div`
background-color: #fff;
padding: 15px;
margin-bottom: 10px;
border-radius: 10px;
 > .post__header {
     display: flex;
     margin-bottom: 10px;
 }
 > .post__header > .post__info {
     margin-left: 10px;
 }
 > .post__header > .post__info > p {
     font-size: 12px;
     color: gray;
 }
 > .post__header > .post__info > h2 {
     font-size: 15px;
 }
 > .post__body {
     overflow-wrap: anywhere;
 }
`