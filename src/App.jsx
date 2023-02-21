import { ChakraProvider } from '@chakra-ui/react'
import ComponenteA from './components/ComponenteA'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'


const App=()=> {

  return (
    <div className="App">
      
      <ChakraProvider>
        
      <NavBar/>
      <ComponenteA/>

      <ItemListContainer greeting={"Bienvenidos a mi Tienda Online"}/>


      </ChakraProvider>
      
      
      </div>


  )
}

export default App
