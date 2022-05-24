import React from 'react';
import {Modal,Button,Typography,Box} from '@mui/material'
import {StoreModal} from '../shared/interface'
import { dummyStoreModal } from '../shared/dummyData'
import styled from 'styled-components'


interface modalCardProps{
  storeModalInfo:StoreModal,
  setStoreModalInfo:Function,
}

const ModalCard = ({setStoreModalInfo,storeModalInfo}:modalCardProps) => {
  const handleClose = () => setStoreModalInfo(dummyStoreModal);
  console.log(storeModalInfo)
  return (
    <div>
      <Modal
        open={storeModalInfo.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalBoxContents>
            <ModalImageBox>
              <ModalImg src={storeModalInfo.image} alt={storeModalInfo.name} />          
            </ModalImageBox>
            <ModalTextBox>
              <XButtonWrapper>
                <Button sx={buttonStyle} onClick={handleClose}>X</Button>
              </XButtonWrapper>
              <Typography id="modal-modal-title" variant="h4" component="h2">
                {storeModalInfo.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 10 }} >
                {storeModalInfo.description}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 10 }} >
                {storeModalInfo.url && `URL: ${ storeModalInfo.url}`}
              </Typography>
            </ModalTextBox>  
          </ModalBoxContents>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalCard;

const XButtonWrapper=styled.div`
  display: flex;
  justify-content: flex-end;
`

const ModalImg=styled.img`
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  margin: 0;
  padding: 0;
`
const ModalImageBox=styled.div`
  width: 50%;
`
const ModalTextBox=styled.div`
  width: 50%;
  padding: 2rem;
  white-space:pre-line;
  line-break: strict;
`

const ModalBoxContents=styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`
const buttonStyle={
  color:'black',
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '90%',
  bgcolor: 'background.paper',
  boxShadow: 14,
  padding:0,
  margin:0
};