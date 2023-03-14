import React,{useState, useEffect} from 'react'
import ItemList from "./ItemList";
import Data from "../data.json"
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [game, setGame] = useState([]);
  
  useEffect(() => {
    const getData = new Promise ((resolve, reject)=> {
        if (Data.length ===0){
          reject (new Error("NO hay datos"));
        }
        setTimeout(()=>{
          resolve (Data);
        }, 1000);
      });

  const gamesData= getData.then((response) => {
    setGame(response)
    console.log(Data);
    
  })
  
  }, []);

  
    const { categoria } = useParams();
    
    const catFilter = Data.filter((data) => data.categoria.toLowerCase() === categoria);
    
    return (
      <div>  
        {categoria ? <ItemList game={catFilter}/> : <ItemList game={Data}/>}
      </div>
  )
}


export default ItemListContainer