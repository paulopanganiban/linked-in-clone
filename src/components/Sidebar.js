import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
function Sidebar() {
    function recentItem(topic) {
        return (
            <SidebarRecentItem>
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </SidebarRecentItem>
        )
    }
    return (
        <SidebarContainer>
            <SidebarTop>
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                <StyledAvatar />
                <h2>John Paulo Panganiban</h2>
                <h4>panganibanjpup@gmail.com</h4>
            </SidebarTop>
            <SidebarStats>
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">
                        2,543
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">
                        2,543
                    </p>
                </div>
            </SidebarStats>
            <SidebarBottom>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </SidebarBottom>
        </SidebarContainer>
    )
}

export default Sidebar
const SidebarRecentItem = styled.div`
display: flex;
font-size: 13px;
font-weight: bolder;
cursor: pointer;
color: gray;
margin-bottom: 5px;
padding: 5px;
> .sidebar__hash {
    margin-right: 10px;
    margin-left: 5px;
}
 :hover {
     background-color: whitesmoke;
     border-radius: 10px;
     cursor: pointer;
     color: black;
 }
`
const SidebarStats = styled.div`
margin-bottom: 10px;
border: 1px solid lightgray;
background-color: #fff;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;

width: 100%;
 > .sidebar__stat {
    margin: 10px;
display: flex;
justify-content: space-between;
 }
 > .sidebar__stat > p {
     color: gray;
     font-size: 13px;
     font-weight: 600;
 }
 > .sidebar__stat > .sidebar__statNumber {
     font-weight: bold;
     color: #0a66c2 !important;
 }
`
const StyledAvatar = styled(Avatar)`

`

const SidebarBottom = styled.div`
width: 100%;
text-align: left;
border: 1px solid lightgray;
background-color: #fff;
border-radius: 10px;
margin-top: 5px;
margin-bottom: 5px;
> p {
    margin-left: 5px;
}
`
const SidebarTop = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;
> img {
     margin-bottom: -20px;
     width: 100%;
     height: 60px;
     border-top-left-radius: 10px;
     border-top-right-radius: 10px;
     object-fit: cover;
 }
 > h4 {
     
     color: gray;
     font-size: 12px;
     margin-bottom: 10px;
 }
 > h2 {
     font-size: 18px;
 }
`
const SidebarContainer = styled.div`
margin-left: 15px;
background-color: #f3f2ef;
display: flex;
flex-direction: column;
justify-content: center;
position: sticky;
top: 80px;
flex: 0.2;
border-radius: 10px;
text-align: center;
height: fit-content;
align-items: center;
`