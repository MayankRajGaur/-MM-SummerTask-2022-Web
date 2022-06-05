import React from 'react'
import Navbar from './components/Navbar'
import Home from './home'
import {Grid} from '@mui/material'
import {Routes,Route} from 'react-router-dom'
import Article from './article.js'

const App = () => {
  return (
    
    <><Navbar />
    
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='article' element={<Article />}></Route>
      </Routes>
    
    
    </>

    
  )
}

export default App

