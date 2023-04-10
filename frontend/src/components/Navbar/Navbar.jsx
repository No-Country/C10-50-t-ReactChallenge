/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/Logo.png'
import './navbar.css'

// eslint-disable-next-line react/prop-types
const Navbar = ({ isShowed }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userInfo) {
      setUser(userInfo)
    }
  }, [])

  const back = () => {
    navigate(-1)
  }

  const closeSession = () => {
    localStorage.removeItem('userInfo')
    navigate('/staff')
  }

  return (
    <div className="navbar">
      <div>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
      </div>

      {isShowed && user ? (
        <div className="navLogin">
          <div className="navUserInfo">
            <img src={user.image} />
            <p>
              <b>{user.name}</b> ({user.role})
            </p>
          </div>
          <div className="navUserBtn">
            <button onClick={closeSession}>Close session</button>
          </div>
        </div>
      ) : (
        <div>
          <button className="buttonNav" onClick={back}>
            Back
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar
