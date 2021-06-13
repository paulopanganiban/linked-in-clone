import React from 'react';
import Header from './components/Header';
import styled from 'styled-components'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/auth/authSlice';
import Login from './components/Login';
function App() {
  const userState = useSelector(selectUser)
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {!userState ? <Login /> : (
      <AppBodyContainer>
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </AppBodyContainer>
      )}


    </div>
  );
}

export default App;
const AppBodyContainer = styled.div`
display: flex;
background-color: #f3f2ef;
`