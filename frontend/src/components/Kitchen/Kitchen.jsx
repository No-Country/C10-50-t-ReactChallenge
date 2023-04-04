import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import '../../styles/kitchen.css'
import CookingList from './CookingList'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketsThunk } from '../../store/slices/tickets.slice'

const Kitchen = () => {
  const [cooking, setCooking] = useState([])
  const dispatch = useDispatch()
  const tickets = useSelector(state => state.tickets)

  useEffect(() => {
    dispatch(getTicketsThunk())
  }, [])

  const confirmOrder = order => {
    Swal.fire({
      title: '¿Quiere comenzar a cocinar el pedido?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Aceptar',
      denyButtonText: 'Cancelar',
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        addToCooking(order)
        // deleteOrder(order)
        Swal.fire('Cocinando!', '', 'success')
      }
    })
  }

  const confirmRejection = order => {
    Swal.fire({
      title: '¿Quiere rechazar el pedido?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Aceptar',
      denyButtonText: 'Cancelar',
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // deleteOrder(order)
        Swal.fire('Eliminado!', '', 'success')
      }
    })
  }

  const addToCooking = order => {
    const newCooking = [...cooking, order]
    setCooking(newCooking)
  }

  return (
    <main className="kitchen">
      <section className="orders">
        <h2>Ordenes</h2>
        <div className="card-container-kitchen">
          {tickets.map(ticket => (
            <div className="card-kitchen" key={ticket._id}>
              {ticket.order.map(order => (
                <div className="order-list" key={order.description}>
                  <p>- {order.name}</p>
                </div>
              ))}
              <hr />
              <p>
                <b>Table: </b> #{ticket.table}
              </p>
              <p>
                <b>Seller: </b> {ticket.staff}
              </p>

              <div className="kitchen-buttons">
                <button className="card-btn" onClick={() => confirmOrder(ticket)}>
                  Aceptar
                </button>
                <button
                  className="card-btn card-btn--decline"
                  onClick={() => confirmRejection(ticket)}
                >
                  Rechazar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CookingList cooking={cooking} setCooking={setCooking} />
    </main>
  )
}

export default Kitchen
