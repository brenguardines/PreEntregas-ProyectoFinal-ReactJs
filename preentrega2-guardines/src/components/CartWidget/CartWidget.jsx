import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/834/834526.png"
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
        <strong>0</strong>
    </div>
  )
}

export default CartWidget