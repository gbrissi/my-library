import React from 'react'
import {styled} from '@mui/material/styles'
import {Container} from '@mui/material'
import SearchField from './SearchField'

export default function BookRegister() {
  return (
    <Container>
      <div style={{marginTop: '5rem'}}>
        <SearchField label='Search for registered books' placeholder='The Lord of the Rings: The Return of the King'/>
      </div>
    </Container>
  )
}