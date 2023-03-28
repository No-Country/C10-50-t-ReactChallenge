import { Button, Space } from 'antd'

export const Home = () => {
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
      <Button type="primary" style={{ width: '150px' }}>
        Staff
      </Button>

      <Button type="primary" style={{ width: '150px' }}>
        Client
      </Button>
    </Space>
  )
}
