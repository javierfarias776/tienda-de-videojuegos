import { useState, useContext, useEffect } from "react";
import { CounterContext } from "../context/StateComponents";


function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [counterCart, setCounterCart] = useState(counter)

  const { productsLit, counter } = useContext(CounterContext);

  useEffect(() => {
    setCounterCart(counter)
    console.log(productsLit, counter)
  }, [counterCart])
  

  function handleAddToCart(item) {    
    console.log(item, productsLit)
    setCartItems([...cartItems, item]);
  }

  function handleRemoveFromCart(index) {
    setCartItems(cartItems.filter((item, i) => i !== index));
  }

  function handleProceedToCheckout() {
    setShowCheckout(true);
  }

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
            <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
      )}
      {showCheckout && (
        <Checkout />
      )}
    </div>
  );
}

export default Cart;
