import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/Logo.png'
import style from './navbar.module.css'

const Navbar = () => {
  const navigate = useNavigate()

  const back = () => {
    navigate(-1)
  }

  return (
    <div className={style.navbar}>
      <div>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <div>
        <button className={style.buttonNav} onClick={back}>
          Back
        </button>
      </div>
    </div>
  )
}

export default Navbar
