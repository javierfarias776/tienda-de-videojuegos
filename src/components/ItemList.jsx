import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({products}) => {
  
  return (
  <div>
      <Container className="catalogo">
        {products?.map((product) => (
          <Item
            key={product.id}
            id={product.id}
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