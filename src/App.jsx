import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './components/Inicio'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemDetail from './components/ItemDetail'



const App = () => {
 
  return (
    
    
 
    <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route exact path ="/" element= {<Inicio />}/>
            <Route exact path ="/catalogo" element={<ItemListContainer />}/>
            <Route exact path ="/categoria/:categoria" element={<ItemListContainer />}/>
            <Route exact path ="/item/:id" element={<ItemDetail />}/>
            
          </Routes>
        <Footer/>
    </BrowserRouter>
  
  )
}

export default App
