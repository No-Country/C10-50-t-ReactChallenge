import { Card } from 'antd'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'
import trash from '../../assets/icons/fi_trash-2.svg'

export const OrderCard = ({ item, index, containerId, handleDeleteTicket }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {draggableProvided => (
        <Card
          style={{
            width: '100%',
            border: '0',
          }}
          bodyStyle={{
            border: '1px solid rgba(0, 0, 0, 0.35)',
            backgroundColor: '#eff1f5',
            borderRadius: '8px',
            margin: '0 auto',
            padding: '1rem',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '1.2rem',
          }}
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          {...draggableProvided.dragHandleProps}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#03314b',
                borderRadius: '11px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '600',
                color: 'white',
              }}
            >
              {item.table}
            </div>
            <div>
              <p style={{ fontWeight: 'bold' }}>{item.client}</p>
              {item.ordersWithQuantity.map(order => (
                <p key={order.id}>
                  x{order.quantity} {order.name}
                </p>
              ))}
            </div>
            <div>${item.total}</div>
          </div>
          <div style={{ position: 'relative', height: '30px' }}>
            <img
              src={trash}
              style={{ width: '25px', position: 'absolute', right: '10px', cursor: 'pointer' }}
              onClick={() => {
                handleDeleteTicket(containerId, item)
              }}
            ></img>
          </div>
        </Card>
      )}
    </Draggable>
  )
}

OrderCard.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  containerId: PropTypes.string.isRequired,
  handleDeleteTicket: PropTypes.func.isRequired,
}
