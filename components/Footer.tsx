import React from 'react';
import styled from 'styled-components'
import Divider from '@mui/material/Divider';


const Footer = () => {
  return (
    <>
      <Divider variant='middle' sx={{ borderBottomWidth: 4 }}/>
      <FooterWrapper className='footer-wrapper'>
        <Pstyle>Copyright@ 2022 배대철</Pstyle>
      </FooterWrapper>
    </>
  );
};

export default Footer;

const FooterWrapper=styled.footer`
  display: flex;
  height: 10vh;
  padding: 0 3rem;
  /* background-color: khaki; */
  margin: 0;
  padding: 1rem;
  align-items: center;
`
const Pstyle=styled.p`
  font-size: 0.8rem;
  opacity: 70%;
  margin: auto;
`