import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Divider,
} from "@chakra-ui/react";

  import { useParams } from "react-router-dom";
  import React from "react";
  import productos from '../data.json';
  import ItemCount from './ItemCount'
  
  const ItemDetail = () => {
    const { id } = useParams();
    
    const producto = productos.find(juego => juego.id === parseInt(id));
  

    return (
      <>
        <div>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={"../" + producto.img} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{producto.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Desc: {producto.desc}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {producto.categoria}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {producto.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Precio: U$D {producto.precio}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                  stock={producto.stock}
                  id={producto.id}
                  precio={producto.precio}
                  nombre={producto.nombre}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>
      </>
    );

  }
  
  export default ItemDetail;