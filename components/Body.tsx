import React from 'react';
import styled from 'styled-components'
import {Grid,Box} from '@mui/material'
interface Store{
  id:number,
  name:string,
  description:string,
  thumb:string,
  url:string,
}
interface BodyProps{
  currentPageName:string;
  storeList:Store[];
}

//React.FC<BodyProps>은 BodyProps의 currentPageName을 props로 받는다
const Body = ({currentPageName,storeList}:BodyProps)=> {
  const storeCardList=storeList.map((item:Store,index:number)=>{
    console.log(item.thumb)
    return(
      <Grid item key={item.id+item.name}>
        <CardImg src={item.thumb} alt={item.name}/>
      </Grid>
    )
  })
  return (
    <BodyWrapper className='body-wrapper'>
      <h2>{currentPageName}</h2>
      <Box flexGrow={1}>
        <Grid container spacing={{xs:2, md:4 }} columns={{xs:4, sm:8, md: 12}}>
          {storeCardList}  
        </Grid>
      </Box>
    </BodyWrapper>
  );
};

export default Body;

const CardImg=styled.img`
  border-radius: 0.5rem;
  width: 12rem;
  height: 12rem;
  overflow: hidden;
`

const BodyWrapper=styled.div`
  position: relative;
  min-height: 80vh;
  margin: 0;
  padding: 3rem;
  /* background-color: darkgray; */
`