import React from 'react';
import Header from './components/Header';
import styled from 'styled-components'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <AppBodyContainer>
        <Sidebar />
        <Feed/>
        {/* Widgets */}
      </AppBodyContainer>

    </div>
  );
}

export default App;
const AppBodyContainer = styled.div`
display: flex;
background-color: #f3f2ef;
`