import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
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
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/about-us' element={<h1>About Us</h1>}/>
          <Route path='/dashboard' element={<h1>Admin Dashboard</h1>}/>
          <Route path='/profile' element={<h1>My Profile</h1>}/>
        </Routes>
      </BrowserRouter>
    {/*</ThemeProvider>*/}
  </React.StrictMode>
)
