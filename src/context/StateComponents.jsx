import {createContext, useState, useEffect} from 'react'

export const CounterContext= createContext();

 const StateComponents = ({children}) => {
  const [counter, setCounter] = useState(0);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log('useEffect: ', productList, counter)
  }, [productList, counter])

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
  const addToCart = (item, counterUpdate) => {
    if (counter > 0) {
      setProductList([...productList, item]);
      setCounter(counterUpdate)
    }
  };
  return (
    <CounterContext.Provider value={{counter, increment, decrement, addToCart, productsLit: productList }}>
      {children}
    </CounterContext.Provider>
  );
};

export default StateComponents;