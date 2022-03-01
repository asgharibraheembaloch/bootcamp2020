import React from 'react'
import { Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>
        <h1>Our Products</h1>
        <hr/>
        <Outlet/>
    </div>
  )
}

export default Product