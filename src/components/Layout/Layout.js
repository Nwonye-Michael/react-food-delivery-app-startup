import React, { useState } from "react"
import Routers from "../../routes/Routers"

import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Carts from "../UI/Cart/Carts"

function Layout() {
  const [openCart, setOpenCart] = useState(false)
  return (
    <div>
      <Header openCart={openCart} setOpenCart={setOpenCart} />
      <Carts openCart={openCart} setOpenCart={setOpenCart} />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
