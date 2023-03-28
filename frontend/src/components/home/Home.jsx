import { Button, Space } from 'antd'

const Home = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  )
}

export default Home
