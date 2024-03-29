import { useState } from 'react'

import Banner from '../components/Banner'
import SearchField from '../components/SearchField'
import Library from '../components/Library'
import {Fade} from '@mui/material'
import Header from '../components/Header'

import {Container} from '@mui/material'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <Header/>
      <Fade in timeout={300}>
        <Container disableGutters sx={{display:'flex', flexDirection:'column'}}>
          <Banner/>
          <div style={{padding: '22px'}}>
            <SearchField setSearchTerm={setSearchTerm} label='Search for the book' placeholder='Hungry Games: The void is awakening'/>
          </div>
          <Library searchTerm={searchTerm}/>
        </Container>
      </Fade>
    </>
  )
}