import {createContext, useState, useEffect} from 'react'

export const CounterContext= createContext();

 const StateComponents = ({children}) => {
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const increment = (stock) =>{
    if(counter > (stock-1)) {
      return
    }
    setCounter(counter +1);
  };

  const decrement = () =>{
    if (counter === 0) {
      return
    }    
    setCounter(counter -1);
  };

  const addToCart = (id) => {
    const idOperation = `${id}-${counter}`;
    const producto = {id, counter, idOperacion: idOperation};
    setProduct(producto)

    setCartItems([...cartItems, producto]);

    setCounter(0);

    console.log("🚀 ~ file: StateComponents.jsx:34 ~ addToCart ~ product:", cartItems)
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <CounterContext.Provider value={{counter, increment, decrement, addToCart, product }}>
      {children}
    </CounterContext.Provider>
  );
};

export default StateComponents;