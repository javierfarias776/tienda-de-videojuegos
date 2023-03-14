import React from 'react'
import CartWidget from './CartWidget'

const ItemCount = ({ stock, id, precio, nombre }) => {
  return (
    <>
      <h2> {nombre}</h2>
     <br/>
     <button onclick="agregarProducto (${id})" className= "btn btn-primary">Agregar a Carrito </button>
  
    </>
  )
}

export default ItemCount

