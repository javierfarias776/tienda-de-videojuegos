import React from "react";
import {
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



const Item = ({ id, nombre, desc, precio, img, categoria, stock }) => {
  return (
    <div>
      <div key={id}>
        <Center p="1rem">
          <Card className="card-main">
            <CardBody>
              <Image borderRadius="lg" src={"../" + img} htmlHeight={180} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{nombre}</Heading>
                <Text color="blue.800" fontSize="l">
                  Categoria: {categoria}
                </Text>
                <Text color="red.600" fontSize="xl">
                  stock: {stock}
                </Text>
                <Text color="red.600" fontSize="xl">
                  Desc: {desc}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <Button>
                  <Link to={`/item/${id}`}>Detalles</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  );
};

export default Item;
