import { Card } from 'antd'
import PropTypes from 'prop-types'

export const OrderCard = ({ table, products, client, total }) => {
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
    </Card>
  )
}

OrderCard.propTypes = {
  table: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  client: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
}
