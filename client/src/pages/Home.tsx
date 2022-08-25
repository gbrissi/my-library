import Banner from '../components/Banner'
import SearchField from '../components/SearchField'
import Library from '../components/Library'
import {Fade} from '@mui/material'

import {Container} from '@mui/material'

export default function Home() {
  return (
    <>
      <Header/>
      <Fade in timeout={300}>
        <Container disableGutters sx={{display:'flex', flexDirection:'column'}}>
          <Banner/>
          <div style={{padding: '22px'}}>
            <SearchField label='Search for the book' placeholder='Hungry Games: The void is awakening'/>
          </div>
          <Library/>
        </Container>
      </Fade>
    </>
  )
}