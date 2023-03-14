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
  
  import { useState } from "react";
  const ItemDetail = ({ data }) => {
    const { id } = useParams();
  
    const [producto, setProducto] = useState([]);
}

    const juegoFilter = juego.filter((data) => juego.id == id);

    return (
      <>
        {juegoFilter.map((data) => (
          <div key={juego.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  <Image borderRadius="lg" src={juego.img} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{juego.name}</Heading>
                    <Text color="blue.800" fontSize="l">
                      Desc: {juego.desc}
                    </Text>
                    <Text color="blue.800" fontSize="l">
                      Categoria: {juego.categoria}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {juego.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Precio: U$D {juego.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                  <ItemCount
                    stock={juego.stock}
                    id={juego.id}
                    price={juego.price}
                    name={juego.name}
                  />
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );

  
  export default ItemDetail;