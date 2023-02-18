import React, { useState, useEffect } from "react"

import { useParams } from "react-router"
import products from "../assets/fake-data/products"
import ProductCard from "../components/UI/product/ProductCard"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/common-section/CommonSection"
import { Container, Row, Col } from "reactstrap"

import "./styles/FoodDetails.css"

function FoodDetails() {
  const [tab, setTab] = useState("desc")
  const [enterdName, setEnteredName] = useState("")
  const [enterdEmail, setEnteredEmail] = useState("")
  const [reviewMsg, setReviewMsg] = useState("")

  const { id } = useParams()
  const product = products.find((product) => product.id == id)
  const [previewImg, setPreviewImg] = useState(product.image01)
  const { title, price, category, desc } = product

  const relatedProduct = products.filter((item) => category === item.category)
  const submitHandler = (e) => {
    e.preventDefault()
  }
  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div className="img__item mb-3">
                  <img
                    src={product.image01}
                    alt=""
                    className="w-50"
                    onClick={() => {
                      setPreviewImg(product.image01)
                    }}
                  />
                </div>
                <div className="img__item mb-3">
                  <img
                    src={product.image02}
                    alt=""
                    className="w-50"
                    onClick={() => {
                      setPreviewImg(product.image02)
                    }}
                  />
                </div>{" "}
                <div className="img__item mb-3">
                  <img
                    src={product.image03}
                    alt=""
                    className="w-50"
                    onClick={() => {
                      setPreviewImg(product.image03)
                    }}
                  />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title ">{title}</h2>
                <p className="product__price">
                  Price: <span>${price}</span>
                </p>
                <p className="category mb-5 ">
                  Category: <span>{category}</span>
                </p>
                <button className="addToCart__btn">Add to Cart</button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={` ${tab == "desc" ? "tab__active" : ""}`}
                  onClick={() => {
                    setTab("desc")
                  }}
                >
                  Description
                </h6>
                <h6
                  className={` ${tab == "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review pt-5 ">
                    <p className="user__name mb-0">John Doe</p>
                    <p className="user__email">filomina@yahoo.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <div className="review ">
                    <p className="user__name mb-0">John Doe</p>
                    <p className="user__email">filomina@yahoo.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <div className="review  ">
                    <p className="user__name mb-0">John Doe</p>
                    <p className="user__email">filomina@yahoo.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

                  <form className="form" onSubmit={submitHandler}>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        onChange={(e) => {
                          setEnteredName(e.target.value)
                        }}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        onChange={(e) => {
                          setEnteredEmail(e.target.value)
                        }}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <textarea
                        rows="5"
                        type="text"
                        placeholder="Write your review"
                        onChange={(e) => {
                          setReviewMsg(e.target.value)
                        }}
                        required
                      />
                    </div>
                    <button className="addToCart__btn" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>
            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>
            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails
