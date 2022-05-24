import React from 'react';
import styled from 'styled-components'
import NavBar from './NavBar'
import Divider from '@mui/material/Divider';

const Header = () => {
  return (
    <>
      <h2 style={projectNameStyle}>AWESOME FOOD STORE</h2>
      <HeaderWrapper className='header-wrapper'>
        <NavBar/>
      </HeaderWrapper>      
      <Divider variant='middle'/>
    </>
  );
};

export default Header;

const projectNameStyle={
  margin:'1.5rem auto 0 auto',
  color:'#464ea3'
}

const HeaderWrapper=styled.div`
  display: flex;
  justify-content: center;
  width:100%;
  height: 10vh;
`