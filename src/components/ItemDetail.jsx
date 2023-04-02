import {
  ChakraProvider,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Center,
} from "@chakra-ui/react";
import { CounterContext } from "../context/StateComponents";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "juegos", `${id}`)

    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const doc = snapshot.data();
        setProduct({ id: id, ...doc });
      }
    });
  }, []);

  const { increment, decrement, addToCart, counter } = useContext(CounterContext);

  return (
    <ChakraProvider>
      <Center>
        <Card maxW="sm">
          <CardBody>
            <Image borderRadius="lg" src={product.img} />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.nombre}</Heading>
              <Text color="blue.800" fontSize="l">
                Desc: {product.desc}
              </Text>
              <Text color="blue.800" fontSize="l">
                Categoria: {product.categoria}
              </Text>
              <Text color="red.600" fontSize="xl">
                Stock: {product.stock}
              </Text>
              <Text color="green.600" fontSize="2xl">
                Precio: U$D {product.precio}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="19.5">
              <Button
                onClick={() => decrement()}
                variant="solid"
                colorScheme="blue"
              >
                -
              </Button>

              <Button variant="ghost" colorScheme="blue">
                Add to cart + {counter}
              </Button>

              <Button
                onClick={() => increment(product.stock)}
                variant="solid"
                colorScheme="blue"
              >
                +
              </Button>
              <Button
                onClick={() => addToCart(product, counter)}
                variant="solid"
                colorScheme="blue"
              >
                Add
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Center>
    </ChakraProvider>
  );
};

export default ItemDetail;
