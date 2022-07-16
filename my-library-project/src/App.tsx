import Header from './Header';
import Banner from './Banner';
import SearchField from './SearchField';
import Library from './Library';

import { Container } from '@mui/material';

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
