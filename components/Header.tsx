import React from 'react';
import styled from 'styled-components'
import NavBar from './NavBar'


type Props = {
  
};
export const Header = (props: Props) => {
  return (
    <>
      <MenuWrapper>
        <NavBar/>
      </MenuWrapper>      
    </>
    );
};

const MenuWrapper=styled.div`
  display: flex;
  justify-content: center;
  width:100%;
  border: 1px solid green;
`