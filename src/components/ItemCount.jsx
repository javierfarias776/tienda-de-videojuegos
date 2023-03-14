import React from 'react'

const ItemCount = ({ stock, id, price, name }) => {
  return (
    <>
      <h1>Item {name}</h1>
      <p>stock: {stock}</p>
      <p>Price: {price}</p>
    </>
  )
}

export default ItemCount

