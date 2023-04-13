import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/icons/LogoFoodTicket.svg'
import style from './home.module.css'

export const Home = () => {
  const navigate = useNavigate()
  const handleOpenStaff = () => {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    if (user) {
      navigate(`${user.role}`)
    } else {
      navigate('/staff')
    }
  }
  const handleOpenClient = () => {
    navigate('/client')
  }
  return (
    <div className={style.container}>
      <div>
        <img src={logo} alt="" className={style.logo} />
      </div>
      <div className={style.botones}>
        <div>
          <button type="primary" onClick={handleOpenStaff} className={style.boton}>
            Staff
          </button>
        </div>
        <div>
          <button type="primary" onClick={handleOpenClient} className={style.boton}>
            Client
          </button>
        </div>
      </div>
    </div>
  )
}
