import React from 'react';
import styled from 'styled-components'
import NavBar from './NavBar'
import Divider from '@mui/material/Divider';

const Header = () => {
  return (
    <>
      <HeaderWrapper className='header-wrapper'>
        <NavBar/>
      </HeaderWrapper>      
      <Divider variant='middle'/>
    </>
  );
};

export default Header;

const HeaderWrapper=styled.div`
  display: flex;
  justify-content: center;
  width:100%;
  height: 10vh;
  /* background-color: darkolivegreen; */
`