import React from 'react'
import Navbar from './components/Navbar'
import Home from './Home'
import {Grid} from '@mui/material'
import {Routes,Route} from 'react-router-dom'
import Article from './article.js'
import Admin from './admin.js'

const App = () => {
  return (
    
    <><Navbar />
    
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/article' element={<Article />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>
    
    
    </>

    
  )
}

export default App

