import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOptions from './HeaderOptions'
import HomeIcon from '@material-ui/icons/Home'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderImg src="https://image.flaticon.com/icons/png/128/174/174857.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" name="" id="" />
                </div>
            </HeaderLeft>
            <HeaderRight>
                <HeaderOptions Icon={HomeIcon} title='Home' />
                <HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOptions Icon={ChatIcon} title='Messaging' />
                <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
                <HeaderOptions avatar="https://www.heroesofnewerth.com/images/heroes/114/icon_128.jpg" />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
const HeaderImg = styled.img`
    /* keep aspect ratio */
    object-fit: contain;
    height: 40px;
    margin-right: 10px;
`
const HeaderContainer = styled.div`
position: sticky;
top: 0;
z-index: 999;
display: flex;
justify-content: space-evenly;
border-bottom: 0.1px solid lightgray;
padding-top: 10px;
padding-bottom: 10px;
width: 100%;

`
const HeaderLeft = styled.div`
display: flex;
align-items: center;
 > .header__search {
     padding: 10px;
     display: flex;
     align-items: center;
     border-radius: 5px;
     height: 22px;
     color: gray;
     background-color: #eef3f8;
 }
 > .header__search > input {
     outline: none;
     border: none;
     background: none;
 }
`
const HeaderRight = styled.div`
display: flex;
align-items: center;
`