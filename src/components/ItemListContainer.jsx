import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "juegos");

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data(), doc.id);
      
      setProducts(docs);
    });
  }, []);

  const { categoria } = useParams();
  
  const catFilter = products.filter(
    (product) => product.categoria.toLowerCase() === categoria
  );

  return (
    <div>
      {categoria ? <ItemList productos={catFilter} /> : <ItemList productos={products} />}
    </div>
  );
};

export default ItemListContainer;
