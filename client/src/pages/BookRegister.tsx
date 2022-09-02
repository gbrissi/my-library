import React, { useState } from 'react'
import {styled} from '@mui/material/styles'
import {Container, Button, IconButton, Fade, Tooltip, Modal} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RegisterBook from '../components/RegisterBook';

import TableComponent from '../components/TableComponent'
import SearchField from '../components/SearchField'
import Header from '../components/Header';

export default function BookRegister() {

  const [searchTerm, setSearchTerm] = useState('')
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <Header/>
      <Fade in timeout={300}>
        <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{marginTop: '8rem', width:'100%', }}>
            <SearchField setSearchTerm={setSearchTerm} label='Filter the books' placeholder='The Lord of the Rings: The Return of the King'/>
          </div>
          <CustomButton onClick={handleOpen} variant='contained'>Add new book +</CustomButton>
          <Modal
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            open={open}
            onClose={handleClose}
            children={<RegisterBook submit='create'/>}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          />
          <TableComponent searchTerm={searchTerm}/>
          <Tooltip title='Add new book'>
            <CustomIconButton onClick={handleOpen} size='large'>
              <AddIcon/>
            </CustomIconButton>
          </Tooltip>
        </Container>
      </Fade>
    </>
  )
}

const CustomIconButton = styled(IconButton)`
  margin-top: 2rem;
  background-color: #00655d;
  color: white;
  margin-bottom: 2rem;
  :hover {
    background-color: teal;
  }
`

const CustomButton = styled(Button)`
  width: 100%;
  padding: 18px 0px;
  margin: 10px;
  background-color: #00655d;
  margin-bottom: 2rem;
  :hover {
    background-color: teal;
  }
`