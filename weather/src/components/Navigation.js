import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'
import logo from './images/logo.gif'

export default function Navigation() {
  
  return (
   <div className='Main-navigation'>
        <div className='head'>

        <a href="/home" ><img src={logo} alt=""  className='logo' ></img></a>
          <h1>Weather Forecast</h1>

          <div className='navbar'>
            <ul>
              <li> <Link to="/home" className='navbar-link'>Home </Link></li>
              <li> <Link to="/Getweather" className='navbar-link'>Get temprature </Link></li>
              <li><Link to="/Converter" className='navbar-link'>Converter</Link></li>
            </ul>

          </div>

        </div>
      </div>

  )
}
