import { useState } from 'react'
import Swal from 'sweetalert2'
import '../../styles/kitchen.css'
import CookingList from './CookingList'

const Kitchen = () => {
  const ordersDefault = [
    {
      id: 1,
      title: 'Nachos',
      quantity: 2,
      tableId: 5,
      description: 'Sin cebolla'
    },
    {
      id: 2,
      title: 'Lasaña',
      quantity: 5,
      tableId: 3,
      description: 'Con salsa picante'
    },
    {
      id: 3,
      title: 'Sushi',
      quantity: 1,
      tableId: 1,
      description: '-'
    },
    {
      id: 4,
      title: 'Pizza',
      quantity: 4,
      tableId: 6,
      description: 'Pizza gigantes'
    },
    {
      id: 5,
      title: 'Hotdog',
      quantity: 4,
      tableId: 4,
      description: 'Sin salsa picante'
    },
    {
      id: 6,
      title: 'Hamburgesa',
      quantity: 5,
      tableId: 2,
      description: 'Sin tomate'
    }
  ]
  const [orders, setOrders] = useState(ordersDefault)
  const [cooking, setCooking] = useState([])

  const confirmOrder = (order) => {
    Swal.fire({
      title: '¿Quiere comenzar a cocinar el pedido?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Aceptar',
      denyButtonText: 'Cancelar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        addToCooking(order)
        deleteOrder(order)
        Swal.fire('Cocinando!', '', 'success')
      }
    })
  }

  const addToCooking = (order) => {
    const newCooking = [...cooking, order]
    setCooking(newCooking)
  }

  const deleteOrder = (orderData) => {
    const newOrder = orders.filter(order => order.id !== orderData.id)
    setOrders(newOrder)
  }

  return (
    <main className="kitchen">
      <section className='orders'>
        <h2>Ordenes</h2>
        <div className="card-container-kitchen">
          {orders.map(order => (
            <div className="card-kitchen" key={order.id}>
              <p className='card-paragraph'>#{order.id}</p>
              <p className='card-paragraph'> {order.quantity} x {order.title}</p>
              <p className="card-paragraph"><b>Nota: </b>{order.description}</p>
              <p className="card-paragraph"><b>Mesa:</b> #{order.tableId}</p>
              <div className="buttons">
                <button className='card-btn' onClick={() => confirmOrder(order)}>Aceptar</button>
                <button className='card-btn card-btn--decline' onClick={() => deleteOrder(order)}>Rechazar</button>
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
