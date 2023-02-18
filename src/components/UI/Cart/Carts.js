import React, { useEffect, useState } from "react"
import CartItem from "./CartItem"
import { ListGroup } from "reactstrap"
import { Link } from "react-router-dom"
import "./shopping-cart.css"

function Carts(props) {
  // setOpenCart = { setOpenCart }
  const CartProduct = [1, 2, 3]

  const [openCart, setOpenCart] = useState(false)

  const onClickCartClose = () => {
    console.log("close")
    // document.getElementsByClassName("cart__container ")
    props.setOpenCart(false)
    console.log("clicked close cart")
  }

  return (
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
          {CartProduct.map((item, index) => {
            return <CartItem key={item} />
          })}
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
            Subtotal amount: <span>$123 </span>{" "}
          </h6>
          <button>
            <Link to="/checkout">CheckOut</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  )
}

export default Carts
