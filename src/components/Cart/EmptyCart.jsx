import React from 'react'
import {BsCartX} from "react-icons/bs"
import "./EmptyCart.scss"
const EmptyCart = () => {
  return (
    <div className="emptyCart">
            <BsCartX/>
            <h2>Cart is Empty</h2>
    </div>
  )
}

export default EmptyCart