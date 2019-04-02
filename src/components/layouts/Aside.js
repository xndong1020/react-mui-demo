import React from 'react'
import { NavLink } from 'react-router-dom'
import './Aside.scss'

const Aside = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/About">About</NavLink>
      </li>
    </ul>
  )
}

export default Aside
