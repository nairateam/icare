import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navigation.style'
import logo from '../../assets/icare.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  return (
    <Navbar>
        <img src={logo} alt="Icare" />
        <ul>
            <li>FAQs</li>
            <li>How to use</li>
            <li>Support</li>
        </ul>
        <button><Link to='/login'>Sign in</Link> <FontAwesomeIcon icon={faArrowRightToBracket} /></button>
    </Navbar>
  )
}

export default Navigation