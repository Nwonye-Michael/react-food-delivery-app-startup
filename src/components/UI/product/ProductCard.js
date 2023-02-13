import React from "react"

import { Link } from "react-router-dom"
import "./ProductCard.css"

function ProductCard(props) {
  const { id, title, image01, price } = props.item
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product" style={{ width: "50%" }} />
      </div>
      <div className="product__content">
        <h5>
          <Link to={`foods/${id}`}>{title}</Link>
        </h5>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="product__price">${price}</span>
          <button className="addtoCart__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
