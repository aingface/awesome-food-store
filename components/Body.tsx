import React,{useState} from 'react';
import styled from 'styled-components'
import {Grid,Box} from '@mui/material'
import {Store,StoreModal} from '../shared/interface'
import { dummyStoreModal } from '../shared/dummyData'
import ModalCard from './ModalCard'

interface BodyProps{
  currentPageName:string;
  storeList:Store[];
}

const Body = ({currentPageName,storeList}:BodyProps)=> {  
  const [storeModalInfo, setStoreModalInfo] = useState<StoreModal>(dummyStoreModal);
  const storeCardList=storeList.map((item:Store,index:number)=>{
    const onClickHandler=()=>setStoreModalInfo({
      id:item.id,
      name:item.name,
      description:item.description,
      thumb:item.thumb,
      image:item.image,
      url:item.url,
      open:true,
    })

    return(
      <Grid item key={item.id+item.name} onClick={onClickHandler}>
        <CardImg src={item.thumb} alt={item.name} />
      </Grid>
    )
  })
  return (
    <>
      <BodyWrapper className='body-wrapper'>
        <BoxWrapper>
          <Box sx={boxStyle}>
            <h2>{currentPageName}</h2>
            <Grid container spacing={{xs:3, md:6}} rowSpacing={5} columnSpacing={8} columns={{xs:4, sm:8, md: 12}}>
              {storeCardList}  
            </Grid>
          </Box>
        </BoxWrapper>
      </BodyWrapper>
      { storeModalInfo['open'] && <ModalCard storeModalInfo={storeModalInfo} setStoreModalInfo={setStoreModalInfo}/>}
    </>
  );
};

export default Body;

const CardImg=styled.img`
  border-radius: 0.5rem;
  width: 12.2rem;
  height: 12.2rem;
  overflow: hidden;
`

const boxStyle={
  width:'70%',
  alignItems:'center',
  margin:'0 auto',
}

const BoxWrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`

const BodyWrapper=styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding: 3rem;
  margin: 0 auto;
`