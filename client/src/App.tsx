import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Banner from './components/Banner'
import SearchField from './components/SearchField'
import Library from './components/Library'
import {Container} from '@mui/material'

function App() {
  return (
  <Container>
    <Header/>
    <Banner/>
    <SearchField/>
    <Library/>
  </Container>
  )
}

export default App
