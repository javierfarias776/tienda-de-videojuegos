import React,{useState, useEffect} from 'react'
import ItemList from "./ItemList";
import Data from "../data.json"


const ItemListContainer = () => {
  
  const [game, setGame] = useState([]);
  useEffect(() => {
    const getData = new Promise ((resolve, reject)=> {
        if (Data.length ===0){
          reject (new Error("NO hay datos"));
        }      
    
        setTimeout(()=>{
          resolve (Data);
        }, 3000);
      });
  const gamesData= getData.then((response) => setGame(response))
  
  }, [])

  return (
    <div>
      <ItemList data={game}/>
    </div>
  )
}

export default ItemListContainer