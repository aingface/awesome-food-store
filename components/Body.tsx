import React,{useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'
interface BodyProps1{
  currentPageName:string;
}
//React.FC<BodyProps>은 BodyProps의 currentPageName을 props로 받는다
const Body = ({currentPageName}:BodyProps1)=> {
  
  useEffect(()=>{
    const stores= axios.get("http://localhost:9000/stores")
    .then((res)=>{
      console.log(res.data)
    })
    .catch(error=>{
      console.log(error);
    })  
  },[])



  
  return (
    <BodyWrapper className='body-wrapper'>
      <h2>{currentPageName}</h2>

    </BodyWrapper>
  );
};

export default Body;

const BodyWrapper=styled.div`
  position: relative;
  min-height: 80vh;
  margin: 0;
  padding: 3rem;
  /* background-color: darkgray; */
`