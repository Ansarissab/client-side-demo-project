import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Cart_Items(props) {
  const [cart_items, setCart_items] = useState([])
  const [products, setProducts] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    axios
      .get('api/v1/cart_items')
      .then((res) => {
        setCart_items(res.data.cart_items)
        setProducts(res.data.products)
        setImages(res.data.images)
      })
      .catch((err) => err)
  }, [cart_items.length])

  const calculateTotal = () => {
    let sub_total = 0
    cart_items.map((item) => {
      sub_total += item.total
    })
    return sub_total
  }

  const removeItem = (id) => {
    axios
      .delete('api/v1/cart_items/' + id)
      .then((resp) => {
        const index = cart_items.findIndex((x) => x.id === id)
        if (index > -1) {
          cart_items.splice(index, 1)
          setCart_items([...cart_items])
        }
      })
      .catch((err) => err)
  }

  return (
    <div className="container">
      {products.map((product, i) => {
        return (
          <div key={i} className="jumbotron">
            <div
              style={{
                width: '100px',
                height: '100px',
                float: 'left'
              }}
              className="mr-2">
              <img className="card-img-top" src={images[i]} />
            </div>
            <div className="ml-2">
              <h1>{product.name}</h1>
              <h5>Price: ${product.price}</h5>
            </div>
            <div>
              <button
                onClick={() => removeItem(cart_items[i].id)}
                className="btn btn-danger">
                Remove Item
              </button>
            </div>
          </div>
        )
      })}
      <h5>Total Amount to pay: $ {calculateTotal()} </h5>
    </div>
  )
}

export default Cart_Items
