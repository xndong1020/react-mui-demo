import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import './Header.scss'

const Header = () => {
  const activeStyle = {
    color: '#F15B2A'
  }
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        <Button variant="contained" color="primary">
          Home
        </Button>
      </NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle}>
        <Button variant="contained" color="secondary">
          About
        </Button>
      </NavLink>
    </nav>
  )
}

export default Header
