// @flow
import * as React from 'react';
import styled from 'styled-components'


interface BodyProps{
  currentPageName:string;
}
//React.FC<BodyProps>은 BodyProps의 currentPageName을 props로 받는다
const AboutBody =({currentPageName}:BodyProps)=> {
  

  return (
    <BodyWrapper className='body-wrapper'>
      <h2>{currentPageName}</h2>
    </BodyWrapper>
  );
};

export default AboutBody;

const BodyWrapper=styled.div`
  position: relative;
  min-height: 80vh;
  margin: 0;
  padding: 3rem;
  /* background-color: darkgray; */
`