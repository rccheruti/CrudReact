import React from 'react'
import './Logo.css'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const logos = props =>
  <aside className="logo">
    <Link to="/" className='logo'>
      <img src={logo} alt='logo' />
    </Link>
  </aside>

  export default logos;