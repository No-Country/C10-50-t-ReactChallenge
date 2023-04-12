/* eslint-disable react/prop-types */

import { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'

const KitchenCard = ({ ticket, index }) => {
  const [showMore, setShowMore] = useState(null)

  const handleShow = id => {
    if (showMore === id) {
      setShowMore(null)
    } else {
      setShowMore(id)
    }
  }

  return (
    <Draggable key={ticket.id} draggableId={ticket.id} index={index}>
      {draggableProvided => (
        <div
          className="card-kitchen"
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          {...draggableProvided.dragHandleProps}
        >
          <div className="arrow-card">
            <div className="arrow-texts">
              <span className="kitchen-table">{ticket.table}</span>
              <span className="kitchen-waiter">{ticket.staff}</span>
            </div>
            <div className="kitchen-more-btn">
              <button onClick={() => handleShow(ticket.id)}>
                {showMore === ticket.id ? '-' : '+'}
              </button>
            </div>
          </div>

          {showMore === ticket.id && (
            <>
              <div className="order-list">
                {ticket.ordersWithQuantity.map(order => (
                  <div key={order.id} className="order-info">
                    <p>
                      {order.quantity}x {order.name}
                    </p>
                  </div>
                ))}
              </div>

              <div className="ticket-info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ducimus!</p>
              </div>
            </>
          )}
        </div>
      )}
    </Draggable>
  )
}

export default KitchenCard
