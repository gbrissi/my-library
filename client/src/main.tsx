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
        <Route path='/potato' element={<h1>potato</h1>}/>
        <Route path='/beans' element={<h1>beans</h1>}/>
        <Route path='/lettuce' element={<h1>lettuce</h1>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
