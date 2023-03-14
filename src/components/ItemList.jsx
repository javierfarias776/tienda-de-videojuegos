import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({game}) => {
  
  return (
  <div>
      <Container className="main-catalogue">
        {game?.map((juego) => (
          <Item
            key={juego.id}
            id={juego.id}
            nombre={juego.nombre}
            desc={juego.desc}
            precio={juego.precio}
            img={juego.img}
            categoria={juego.categoria}
            stock={juego.stock}
          />
        ))}
      
      </Container>
    </div>
  );
};

export default ItemList;