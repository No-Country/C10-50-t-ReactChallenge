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
    <Draggable key={ticket._id} draggableId={ticket._id} index={index}>
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
              <button onClick={() => handleShow(ticket._id)}>
                {showMore === ticket._id ? '-' : '+'}
              </button>
            </div>
          </div>

          {showMore === ticket._id && (
            <>
              <div className="order-list">
                {ticket.order.map(
                  order =>
                    typeof order === 'string' && (
                      <div key={order} className="order-info">
                        <p>1 x {order}</p>
                      </div>
                    )
                )}
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
