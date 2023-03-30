import React from "react";
import {ChakraProvider,
  Center,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Divider,
  Stack,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";



const Item = ({ key, nombre, desc, precio, img, categoria, stock }) => {
  const name = nombre.replaceAll(' ', '_').toLowerCase();
  console.log(name);
  return (
    <ChakraProvider>

    <div>
      <div key={ key }>
        
          <Card maxW="xs">
            <CardBody>
              <Image borderRadius="lg" src={img}/>
              <Stack mt="6" spacing="3">
                <Heading size="md">{nombre}</Heading>
                <Text color="blue.800" fontSize="l">
                  Categoria: {categoria}
                </Text>
                <Text color="red.400" fontSize="xl">
                  stock: {stock}
                </Text>
                <Text color="green.600" fontSize="xl">
                  Desc: {desc}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <Button>
                  <Link to={`/item/${name}`}>Detalles</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        
      </div>
    </div>
    </ChakraProvider>
  );
};

export default Item;
