import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import logo from './logo.png'
const Navbar = () => {
  return (
    <nav className="nav-wrapper white">
      <div className="container">
        <Link to='/' className="brand-logo">SerreMascir</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

export default Navbar
