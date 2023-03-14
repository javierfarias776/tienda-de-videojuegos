import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({data}) => {
  
  return (
  <>
      <Container className="main-catalogue">
        {data?.map((juego) => (
          <Item
            key={juego.id}
            id={juego.id}
            nombre={juego.nombre}
            desc={juego.description}
            precio={juego.precio}
            img={juego.img}
            categoria={juego.categoria}
            stock={juego.stock}
          />
        ))}
      
      </Container>
    </>
  );
};

export default ItemList;