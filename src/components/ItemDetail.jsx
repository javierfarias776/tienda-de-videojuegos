import { ChakraProvider, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Center } from '@chakra-ui/react'
   import{useContext} from "react"
   import { CounterContext } from '../context/StateComponents';
  import { useParams } from "react-router-dom";
  import React from "react";
  import productos from '../data.json';

  
  const ItemDetail = () => {
    const{ increment, decrement, reset, counter } = useContext(CounterContext);
    const { id } = useParams();
    
    const producto = productos.find(juego => juego.id === parseInt(id));
  

    return (
      <ChakraProvider>

        
          <Center>

            <Card maxW="sm">
              <CardBody>
                <Image borderRadius='lg' src={"../" + producto.img} />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{producto.nombre}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Desc: {producto.desc}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {producto.categoria}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {producto.stock}
                  </Text>
                  <Text color="green.600" fontSize="2xl">
                    Precio: U$D {producto.precio}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
                  <CardFooter>

                    <ButtonGroup spacing='19.5'>
                      <Button onClick={() => decrement()} variant='solid' colorScheme='blue'>
                        -
                      </Button>
                    
                      <Button  variant='ghost' colorScheme='blue'>
                        Add to cart + {counter}
                      </Button>
                    
                      <Button onClick={() => increment()} variant='solid' colorScheme='blue'>
                        +
                      </Button>
                      <Button onClick={() => reset()} variant='solid' colorScheme='blue'>
                        Reset
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
              
              
            </Card>
          </Center>
          
        
            </ChakraProvider>
      
    );
    
  }
  
  export default ItemDetail;