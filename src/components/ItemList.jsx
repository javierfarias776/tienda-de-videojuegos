import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ productos }) => {
  console.log('ItemList: ', productos);
  productos?.map((product) => {
    console.log("🚀 ~ product: ", product)    
  })
  
  return (
  <div>
      <Container className="catalogo">
        {productos?.map((product) => (
          <Item
            key={product.nombre}
            nombre={product.nombre}
            desc={product.desc}
            precio={product.precio}
            img={product.img}
            categoria={product.categoria}
            stock={product.stock}
          />
        ))}      
      </Container>
    </div>
  );
};

export default ItemList;