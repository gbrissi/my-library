import React from 'react'
import ReactDOM from 'react-dom/client'
import BookRegister from './pages/BookRegister'
import Header from './components/Header'
import Home from './pages/Home'

import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import AboutUs from './pages/AboutUs'
/*
import {createTheme, ThemeProvider} from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#f5f5f5',
      main: '#fff',
      dark: '#424242'
    },
  }
})
*/
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*<ThemeProvider theme={theme}>*/}
      <BrowserRouter>
        {/*<Header/>*/}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/dashboard' element={<BookRegister/>}/>
        </Routes>
      </BrowserRouter>
    {/*</ThemeProvider>*/}
  </React.StrictMode>
)
