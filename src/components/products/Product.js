import React, { Fragment, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Product({ pro, onClick, image }) {
  const [showBtn, setShowBtn] = useState(false)

  const notify = () => {
    toast.success('Product added to the cart..!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }

  const handleClick = (product_id) => {
    onClick(product_id)
    setShowBtn(true)
    notify()
  }
  return (
    <Fragment>
      <div className="col-md-6 col-sm-10 col-lg-4 mt-5">
        <div className="card">
          <div className="card-body">
            <div
              style={{
                width: '250px',
                height: '250px',
                overflow: 'hidden',
                margin: 'auto'
              }}>
              <img className="card-img-top" src={image} alt={image} />
            </div>
            <h3 className="card-title mt-2">{pro.name}</h3>
            <p className="card-text">{pro.description}</p>
            <p className="card-text">
              <strong>Price $ {pro.price}</strong>
            </p>
            <button
              className="btn btn-success"
              onClick={() => {
                handleClick(pro.id)
              }}
              disabled={showBtn}>
              Add to cart
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Product
