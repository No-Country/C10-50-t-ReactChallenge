import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/img/Logo.png'
import style from './home.module.css'

export const Home = () => {
  const navigate = useNavigate()
  const handleOpenStaff = () => {
    navigate('/staff')
  }
  const handleOpenClient = () => {
    navigate('/client')
  }
  return (
    <div className={style.container}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className={style.botones}>
        <div>
          <Button type="primary" onClick={handleOpenStaff} style={{ width: '150px' }}>
            Staff
          </Button>
        </div>
        <div>
          <Button type="primary" onClick={handleOpenClient} style={{ width: '150px' }}>
            Client
          </Button>
        </div>
      </div>
    </div>
  )
}
