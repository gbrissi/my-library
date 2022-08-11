import Banner from './components/Banner'
import SearchField from './components/SearchField'
import Library from './components/Library'
import {Container} from '@mui/material'

function App() {
  return (
  <Container sx={{display:'flex', flexDirection:'column'}}>
    <Banner/>
    <SearchField label='Search for the book' placeholder='Hungry Games: The void is awakening'/>
    <Library/>
  </Container>
  )
}

export default App
