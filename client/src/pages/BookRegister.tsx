import React from 'react'
import {styled} from '@mui/material/styles'
import {Container, Button, IconButton, Fade} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import TableComponent from '../components/TableComponent'
import SearchField from '../components/SearchField'

export default function BookRegister() {
  return (
    <Fade in timeout={300}>
      <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{marginTop: '8rem', width:'100%', }}>
          <SearchField label='Filter the books' placeholder='The Lord of the Rings: The Return of the King'/>
        </div>
        <CustomButton variant='contained'>Add new book +</CustomButton>
        <TableComponent/>
        <CustomIconButton size='large'>
          <AddIcon/>
        </CustomIconButton>
      </Container>
    </Fade>

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