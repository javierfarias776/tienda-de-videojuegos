import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './components/Inicio'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'




const App = () => {
 
  return (

    <BrowserRouter>
  
      <NavBar/>
    <Routes>

     <Route exact path ="/" element= {<Inicio/>}/>
     <Route exact path ="/ItemListContainer" element={<ItemListContainer/>}/>
      
    </Routes>
      
      
      <Footer/>

    </BrowserRouter>
    
      
    
  )
}

export default App
