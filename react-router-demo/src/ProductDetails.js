import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const {productId} = useParams();
  return (
    <div>Product Details of {productId}</div>
  )
}

export default ProductDetails