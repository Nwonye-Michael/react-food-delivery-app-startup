import React from "react"
import Carts from "../UI/Cart/Carts"

function Helmet(props) {
  document.title = "Food ordering app -" + props.title
  return (
    <div className="w-100">
      {props.children}
      {/* <Carts /> */}
    </div>
  )
}

export default Helmet
