import Banner from '../components/Banner'
import SearchField from '../components/SearchField'
import Library from '../components/Library'

import {Container} from '@mui/material'

export default function Home() {
  return (
    <Container disableGutters sx={{display:'flex', flexDirection:'column'}}>
      <Banner/>
      <div style={{padding: '22px'}}>
        <SearchField label='Search for the book' placeholder='Hungry Games: The void is awakening'/>
      </div>
      <Library/>
    </Container>
  )
}