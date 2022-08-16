import React from 'react'
import {styled} from '@mui/material/styles'
import {Container, Button} from '@mui/material'
import SearchField from '../components/SearchField'

export default function BookRegister() {
  return (
    <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{marginTop: '8rem', marginBottom: '1rem', width:'100%', }}>
        <SearchField label='Search for registered books' placeholder='The Lord of the Rings: The Return of the King'/>
      </div>
      <CustomButton variant='contained'>Add new book</CustomButton>
    </Container>
  )
}

const CustomButton = styled(Button)`
  width: 100%;
  padding: 18px 0px;
  margin: 10px;
  background-color: #00655d;
  :hover {
    background-color: teal;
  }
`