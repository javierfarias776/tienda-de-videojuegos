import React from 'react'
import CartWidget from './CartWidget'

const ItemCount = ({ stock, id, precio, nombre }) => {
  return (
    <>
      <h2> {nombre}</h2>
  
     <button className= "btn btn-primary">Agregar a Carrito </button>
  
    </>
  )
}

export default ItemCount

