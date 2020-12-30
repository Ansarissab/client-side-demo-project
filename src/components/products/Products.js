import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Product from './Product'

const Products = () => {
  const [products, setProducts] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    axios
      .get('api/v1/products.json')
      .then((res) => {
        setProducts(res.data.products)
        setImages(res.data.images)
      })
      .catch((err) => err)
  }, [])

  const handleAddToCart = (id) => {
    axios({
      method: 'post',
      url: 'api/v1/cart_items',
      data: {
        product_id: id,
        quantity: 1
      }
    })
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {products.map((product, i) => {
              return (
                <Product
                  key={i}
                  pro={product}
                  image={images[i]}
                  onClick={(product_id) => handleAddToCart(product_id)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Products
