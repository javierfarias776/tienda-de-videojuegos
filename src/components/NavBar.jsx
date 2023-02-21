import React from 'react'
import { Avatar} from '@chakra-ui/react'
import { Wrap, WrapItem, Center,Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Spacer } from '@chakra-ui/react'

import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div>
            <Wrap>
  <WrapItem>
    
    <Avatar size='lg' name='control animado' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKqjjYq5PSsKnOnG6Lfng6YArNgTQ6zsmWw&usqp=CAU' />{''}
    <h1>Tienda de videojuegos</h1>

  </WrapItem>
  <Spacer/>
  <WrapItem>
    
    <Tabs>
  <TabList w='200px'>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    
  </TabPanels>
</Tabs>

  </WrapItem>
  <Spacer/>
  
  <WrapItem>
    <Center w='180px' h='80px'>
      <CartWidget/>
    </Center>
  </WrapItem>
  
</Wrap>
    

  

    
    
    </div>
  )
}

export default NavBar