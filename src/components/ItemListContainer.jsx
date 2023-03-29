import React,{useState, useEffect} from 'react'
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore} from "firebase/firestore"


const ItemListContainer = () => {
  const [game, setGame, products, setProducts] = useState([]);

  useEffect(()=>{
    const db = getFirestore();

    const itemsCollection = collection(db, "juegos");
    getDocs(itemsCollection).then((snapshot)=>{
        const docs= snapshot.docs.map((doc) => doc.data());
        
        setProducts(docs);
    });
}, []);
  
  useEffect(() => {
    const getData = new Promise ((resolve, reject)=> {
        if (products.length ===0){
          reject (new Error("NO hay datos"));
        }
        setTimeout(()=>{
          resolve (products);
        }, 1000);
      });

  const gamesData= getData.then((response) => {
    setGame(response)
    console.log(Data);
    
  })
  
  }, []);

  
    const { categoria } = useParams();
    
    const catFilter = products.filter((product) => product.categoria.toLowerCase() === categoria);
    
    return (
    
      <div>  
        {categoria ? <ItemList game={catFilter}/> : <ItemList game={products}/>}
      </div>
  )
}


export default ItemListContainer