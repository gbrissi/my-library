import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/about-us' element={<h1>About Us</h1>}/>
        <Route path='/dashboard' element={<h1>Admin Dashboard</h1>}/>
        <Route path='/profile' element={<h1>My Profile</h1>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
