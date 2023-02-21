import React, { useEffect, useState, useContext } from "react"
import CartItem from "./CartItem"
import { ListGroup } from "reactstrap"
import { Link } from "react-router-dom"
import "./shopping-cart.css"
import products from "../../../assets/fake-data/products"
import { ProductContext } from "../../Layout/Layout"

function Carts(props) {
  const onClickCartClose = () => {
    console.log("close")
    // document.getElementsByClassName("cart__container ")
    props.setOpenCart(false)
    console.log("clicked close cart")
  }

  // cart context
  const { cartProducts, setCartProducts } = useContext(ProductContext)
  //create array for various titles

  let newCartProducts = cartProducts.map((r) => {
    return {
      ...r,
      quantity: 1,
    }
  })

  newCartProducts.forEach((value, index, self) => {
    let r = self.findIndex((t) => t.id === value.id)
    if (index !== r) {
      self[r].quantity += 1
    }
  })
  newCartProducts = newCartProducts.filter(
    (value, index, self) => index === self.findIndex((t) => t.id === value.id)
  )
  let totalAmount = 0
  newCartProducts.map((item) => {
    totalAmount = totalAmount + item.price
  })

  return (
    <div>
      <div
        className={`cart__container
    
    ${!props.openCart ? "close__modal" : ""}
    `}
      >
        <ListGroup className="cart">
          <div className="cart__close" onClick={onClickCartClose}>
            <span>
              <i class="ri-close-fill"></i>
            </span>
          </div>
          <div className="cart__item-list">
            {newCartProducts.map((item) => (
              <CartItem
                title={item.title}
                key={item.id}
                image01={item.image01}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>

          <div
            className="cart__bottom"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h6>
              Subtotal amount: <span>${totalAmount} </span>{" "}
            </h6>
            <button>
              <Link to="/checkout">CheckOut</Link>
            </button>
          </div>
        </ListGroup>
      </div>
    </div>
  )
}

export default Carts
