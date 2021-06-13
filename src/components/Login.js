import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { login } from '../features/auth/authSlice'
import { auth } from '../firebase'
const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [profilePictureURL, setProfilePictureURL] = useState('')
    const register = (e) => {
        e.preventDefault()
        // pag walang name
        if (!name) {
            return alert('Please enter a full name')
        }
        auth.createUserWithEmailAndPassword(email, password)
        // if SUCCESFULL, then
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePictureURL,
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePictureURL,
                }))
            })
        }).catch(error => alert(error))
    }
    const loginToApp = (e) => {
        e.preventDefault()
    }
    return (
        <LoginContainer>
            <img src="https://cdn.asp.events/CLIENT_Oliver_K_15A4C8AE_5056_B739_54CFDE58102DEF33/sites/Sydney-Build-2020/media/hoc-and-linkedin-lounge/LinkedIn-logo.png" alt="" />
            <form action="" onSubmit={register}>
                <input placeholder="full name required"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text" alt="" />
                <input placeholder="profile picture url"
                    value={profilePictureURL}
                    onChange={e => setProfilePictureURL(e.target.value)}
                    type="text" alt="" />
                <input placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email" alt="" />
                <input placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" alt="" />
                <button type="submit">Sign In</button>
            </form>
            <p>Not a member?{' '}
                <span className='login__register'
                    onClick={register}
                >Register Now</span>
            </p>
        </LoginContainer>
    )
}

export default Login
const LoginContainer = styled.div`
display: grid;
place-items: center;
margin-left: auto;
margin-right: auto;
padding-top: 100px;
padding-bottom: 100px;
 > form {
     display: flex;
     flex-direction: column;
 }
 > form > input {
     width: 350px;
     height: 50px;
     font-size: 20px;
     padding-left: 10px;
     margin-bottom: 10px;
     border-radius: 5px;
 }
 > form > button {
     width: 365px;
     height: 50px;
     font-size: large;
     color: #fff;
     background-color: #0074b1;
     border-radius: 5px;
     cursor: pointer;
 }
 > img {
     object-fit: contain;
     height: 150px;
     margin-top: 20px;
     margin-bottom: 20px;
 }
 > p {
     margin-top: 20px;
 }
 > p > .login__register {
     color: #0177b7;
     cursor: pointer;
 }
`
