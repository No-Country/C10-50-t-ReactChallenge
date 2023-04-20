/* eslint-disable react/prop-types */
import loginIcon from '../../assets/icons/login.svg'
import closeIcon from '../../assets/icons/close.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const Auth = ({ staffSelected, setStaffSelected }) => {
  const [inputValues, setInputValues] = useState(['', '', '', ''])
  const navigate = useNavigate()

  const handleInputChange = (index, event) => {
    const value = event.target.value
    setInputValues(prevState => {
      const newInputValues = [...prevState]
      newInputValues[index] = value

      if (value !== '' && index < 3) {
        const nextInput = event.target.nextElementSibling
        nextInput.focus()
      } else if (value === '' && index > 0) {
        const prevInput = event.target.previousElementSibling
        prevInput.focus()
      }

      return newInputValues
    })
  }

  const loginUser = () => {
    const password = inputValues.join('')
    const user = { name: staffSelected.name, password }

    if (password.length === 4) {
      axios
        .post('http://localhost:3001/api/auth/login', user)
        .then(res => {
          localStorage.setItem('userInfo', JSON.stringify(res.data))
          navigate(`/${staffSelected.role}`)
        })
        .catch(error => toast.error(error.response.data))
    } else {
      toast.error('Type a password')
    }
  }

  return (
    <div className="auth">
      <div className="auth-card">
        <section className="auth-header">
          <div className="auth-header-main">
            <img src={loginIcon} />
            <h2>Start Session</h2>
          </div>
          <img onClick={() => setStaffSelected(null)} className="auth-close" src={closeIcon} />
        </section>

        <section className="auth-profile">
          <div className="auth-img-container">
            <img src={staffSelected.image} />
          </div>
          <h3>{staffSelected.name}</h3>
        </section>

        <section className="auth-login">
          <div className="input-container-auth">
            {inputValues.map((value, index) => (
              <input
                key={index}
                type="password"
                value={value.slice(0, 1)}
                onChange={e => handleInputChange(index, e)}
              />
            ))}
          </div>
          <button onClick={loginUser} className="auth-btn">
            Log in
          </button>
          <Toaster position="top-center" reverseOrder={false} />
        </section>
      </div>
    </div>
  )
}

export default Auth
