import React, { useRef } from "react"
import { Container, Nav } from "reactstrap"
import logo from "../../assets/images/res-logo.png"
import { NavLink, Link } from "react-router-dom"
import "./Header.css"
const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "All Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
]
function Header() {
  const menuRef = useRef(null)
  const toogleMenu = () => menuRef.current.classList.toggle("show__menu")
  return (
    <header className="header">
      <Container>
        <div className="nav_wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          <div className="navigation" ref={menuRef} onClick={toogleMenu}>
            <div className="menu">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* nav right icons */}
          <div className="nav__right ">
            <span className="cart__icon">
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">2</span>
            </span>
            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>
            <span className="mobile__menu" onClick={toogleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
