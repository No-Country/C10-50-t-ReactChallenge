import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  const handleOpenStaff = () => {
    navigate('/login')
  }
  const handleOpenClient = () => {
    navigate('/client')
  }
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>FOODTICKET</h1>
      <Button type="primary" onClick={handleOpenStaff} style={{ width: '150px' }}>
        Staff
      </Button>

      <Button type="primary" onClick={handleOpenClient} style={{ width: '150px' }}>
        Client
      </Button>
    </Space>
  )
}
