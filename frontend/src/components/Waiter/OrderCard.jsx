import { Button, Card } from 'antd'
import PropTypes from 'prop-types'
import trash from '../../assets/icons/fi_trash-2.svg'

export const OrderCard = ({ table, ordersWithQuantity = [], client, total }) => {
  const handleDeleteTicket = () => {
    console.log('ticket')
  }
  return (
    <Card style={{ width: '100%' }} bodyStyle={{ padding: '5px' }}>
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
          {ordersWithQuantity.map(order => (
            <p key={order.id}>
              x{order.quantity} {order.name}
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
  ordersWithQuantity: PropTypes.array.isRequired,
  client: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
}
