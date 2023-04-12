import { Button, Card } from 'antd'
import PropTypes from 'prop-types'
import trash from '../../assets/icons/fi_trash-2.svg'

export const OrderCard = ({ table, products, client, total }) => {
  const handleDeleteTicket = () => {
    console.log('ticket')
  }
  return (
    <Card style={{ width: '175px' }} bodyStyle={{ padding: '5px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            width: '65px',
            height: '65px',
            background: '#FFFFFF',
            border: '6px solid #7CA6F9',
            borderRadius: '11px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {table}
        </div>
        <div>
          <p style={{ fontWeight: 'bold' }}>{client}</p>
          {products.map(product => (
            <p key={product.id}>
              x{product.quantity} {product.name}
            </p>
          ))}
        </div>
        <div>${total}</div>
      </div>
      <div style={{ position: 'relative', height: '30px' }}>
        <Button
          style={{ border: 0, position: 'absolute', right: '10px', height: '25px', width: '25px' }}
          onClick={() => {
            console.log('pending delete')
          }}
        >
          <img src={trash} style={{ width: '25px' }} onClick={handleDeleteTicket}></img>
        </Button>
      </div>
    </Card>
  )
}

OrderCard.propTypes = {
  table: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  client: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
}
