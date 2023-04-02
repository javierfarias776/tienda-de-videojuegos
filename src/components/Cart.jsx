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
import { useState, useContext, useEffect } from "react";
import { CounterContext } from "../context/StateComponents";
import { getDoc, getFirestore, doc } from "firebase/firestore";


function Cart() {
  const [cartProductos, setCartProductos] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [counterCart, setCounterCart] = useState(0)
  const [productIdCart, setProductIdCart] = useState([]);

  const { product } = useContext(CounterContext);
  const cartItemsLS = JSON.parse(localStorage.getItem('cartItems'));
  let carrito = [];
  
  useEffect(() => {
    const db = getFirestore();
    
    cartItemsLS.map(item => {
      if (item.idOperacion) {
        const oneItem = doc(db, "juegos", item.id);

        getDoc(oneItem).then(snapshot => {

          if (snapshot.exists()) {
            const doc = snapshot.data();
            console.log("🚀 ~ file: Cart.jsx:40 ~ getDoc ~ doc:", doc)
            const docConIDOperacion = { id: item.id, cantidad: item.counter, idOperacion: item.idOperacion, ...doc };
            console.log("🚀 ~ file: Cart.jsx:43 ~ getDoc ~ docConIDOperacion:", docConIDOperacion)
            
            handleAddToCart(docConIDOperacion);
          }
        });
      }
    })
  }, [product]);
  

  function handleAddToCart(product) {
    console.log("🚀 ~ file: Cart.jsx:50 ~ handleAddToCart ~ product:", product)
    console.log("🚀 ~ file: Cart.jsx:58 ~ handleAddToCart ~ cartProductos:", cartProductos)
    
    // const existeIdOperacion = cartProductos.find(item => item.IdOperacion === product.IdOperacion);
    // if (existeIdOperacion) {
    //   return;
    // }
    carrito.push(product);
    console.log("🚀 ~ file: Cart.jsx:58 ~ handleAddToCart ~ carrito:", carrito)
    setCartProductos(carrito);
  }

  function handleRemoveFromCart(index) {
    setCartProductos(cartProductos.filter((item, i) => i !== index));
  }

  function handleProceedToCheckout() {
    setShowCheckout(true);
  }

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartProductos.map((item, index) => (
          <li key={index}>
            <ChakraProvider>
              <Center>
                <Card maxW="sm">
                  <CardBody>
                    <Image borderRadius="lg" src={item.img} />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{item.nombre}</Heading>
                      <Text color="blue.800" fontSize="l">
                        Cantidad: {item.cantidad}
                      </Text>
                      <Text color="green.600" fontSize="2xl">
                        Precio: U$D {item.precio}
                      </Text>
                      <Text color="blue.800" fontSize="l">
                      <span>Precio total:</span>
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="19.5">
                    <Button
                        onClick={() => comprar()}
                        variant="solid"
                        colorScheme="blue"
                      >
                        Comprar
                      </Button>
                     
                      <Button
                        onClick={() => eliminarProducto()}
                        variant="solid"
                        colorScheme="blue"
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </Center>
            </ChakraProvider>
          </li>
        ))}
      </ul>
      {cartProductos.length > 0 && (
        <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
      )}
      {showCheckout && (
        <Checkout />
      )}
    </div>
  );
}

export default Cart;
