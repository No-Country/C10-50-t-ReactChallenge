/* eslint-disable react/prop-types */

import { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import trash from '../../assets/icons/fi_trash-2.svg'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getTicketsThunk } from '../../store/slices/kitchen.slice'

const KitchenCard = ({ ticket, index, showAlert, setShowAlert }) => {
  const [showMore, setShowMore] = useState(null)
  const dispatch = useDispatch()

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
                {ticket.order.map(order => (
                  <div key={order.id} className="order-info">
                    <p>1 x {order.name}</p>
                  </div>
                ))}
              </div>

              <div className="ticket-info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ducimus!</p>
              </div>

              <div className="trash-icon">
                <img onClick={() => setShowAlert(ticket._id)} src={trash} className="" />
              </div>
            </>
          )}
        </div>
      )}
    </Draggable>
  )
}

export default KitchenCard
