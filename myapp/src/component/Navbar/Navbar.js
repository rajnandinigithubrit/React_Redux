import React from 'react'
import { Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const items = useSelector((state) => state.cart)
  const item = JSON.stringify(items.length)
const navigate = useNavigate()
  const handleCart = () =>{
    navigate('/cart')
  }
  return (
    <div style={{display:"flex",alignItems:"space-between"}}>
       <span className='logo'> Redux Store</span>

       <div>
        <Link className="navLink" to='/'>
            Home
        </Link>
        <Link className="navLink" to='/'>
            Cart
        </Link>

        <span className='cartCount' onClick={handleCart}>Cart item:{item} </span>
       </div>
    </div>
  )
}

export default Navbar
