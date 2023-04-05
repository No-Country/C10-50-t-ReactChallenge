/* eslint-disable react/prop-types */
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const OrderList = ({ ticket, showMore }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: ticket._id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div className="card-kitchen" ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="arrow-card">
        <div className="arrow-texts">
          <span className="kitchen-table">{ticket.table}</span>
          <span className="kitchen-waiter">{ticket.staff}</span>
        </div>
        <div className="kitchen-more-btn">
          <button>{showMore === ticket._id ? '-' : '+'}</button>
        </div>
      </div>

      {showMore === ticket._id && (
        <>
          <div className="order-list">
            {ticket.order.map(order => (
              <div key={order} className="order-info">
                <p>(x1) {order}</p>
              </div>
            ))}
          </div>

          <div className="ticket-info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ducimus!</p>
          </div>
        </>
      )}
    </div>
  )
}

export default OrderList
