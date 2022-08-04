import Header from './components/Header'
import Banner from './components/Banner'
import SearchField from './components/SearchField'
import Library from './components/Library'
import {Container} from '@mui/material'

function App() {
  return (
  <Container sx={{display:'flex', flexDirection:'column'}}>
    <Header/>
    <Banner/>
    <SearchField/>
    <Library/>
  </Container>
  )
}

export default App
