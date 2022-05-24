// @flow
import * as React from 'react';
import styled from 'styled-components'
import {Box,Typography} from '@mui/material'

interface AboutContentsProps{
  currentPageName:string;
}
const AboutContents =({currentPageName}:AboutContentsProps)=> {
  return (
    <BodyWrapper className='body-wrapper'>
        <BoxWrapper>
          <Box sx={boxStyle}>
            <ModalTextBox>
              <h2>{currentPageName}</h2>
              <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                <p>
                  맛집 리스트를 보여주고 리스트 중 하나의 아이템을 선택하면 모달 창이 열리고 상세 설명을 보여주는 페이지입니다.{'\n'}    
                  잘못된 경로로 이동 시 5초 후 메인 페이지로 이동합니다.{'\n'}
                  TypeScript로 코드를 작성했습니다.{'\n'}
                  Next.js, Matarial UI, styled Components를 사용해서 구현했습니다.{'\n'}
                  json-server를 사용했습니다. localhost 9000번 port로 정해 db.json 파일의 값을 서버에서 불러온 것처럼 구현했습니다.{'\n'} 
                  상태 관리는 useState를 사용했습니다.{'\n'}              
                </p>
              </Typography>
            </ModalTextBox>
          </Box>
        </BoxWrapper>
      </BodyWrapper>
  );
};

export default AboutContents;


const boxStyle={
  width:'100%',
  alignItems:'center',
  margin:'0 auto',
}

const BoxWrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`

const ModalTextBox=styled.div`
  width: 100%;
  padding: 2rem;
  white-space:pre-line;
  line-break: strict;
  >p{
    font-size: 1.3rem;
    line-height: 3rem;
    color: #4d4c4c;
  }
`
const BodyWrapper=styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding: 3rem;
  margin: 0 auto;
`