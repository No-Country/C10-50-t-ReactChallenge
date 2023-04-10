/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './admin.module.css'
import { getProductsThunk } from '../../store/slices/products.slice'
import { getStaffThunk } from '../../store/slices/staff.slice'
import { getTicketsThunk } from '../../store/slices/tickets.slice'
import Navbar from '../Navbar/Navbar'

const Admin = () => {
  const [dashboardStatus, setDashboardStatus] = React.useState('products')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
    dispatch(getStaffThunk())
    dispatch(getTicketsThunk())
  }, [])

  const products = useSelector(state => state.products)
  const staff = useSelector(state => state.staff)
  const tickets = useSelector(state => state.tickets)

  const setStatus = element => {
    setDashboardStatus(element.target.value)
  }

  return (
    <div>
      <Navbar isShowed={true} />
      <div className={style.body}>
        <div className={style.navbar}>
          <h1>Admin</h1>
          <div>
            <button
              className={dashboardStatus === 'products' ? style.btnn : style.btn}
              onClick={setStatus}
              value="products"
            >
              Products
            </button>
          </div>
          <div>
            <button
              className={dashboardStatus === 'staff' ? style.btnn : style.btn}
              onClick={setStatus}
              value="staff"
            >
              Staff
            </button>
          </div>
          <div>
            <button
              className={dashboardStatus === 'tickets' ? style.btnn : style.btn}
              onClick={setStatus}
              value="tickets"
            >
              Tickets
            </button>
          </div>
        </div>

        {dashboardStatus === 'products' ? (
          <div>
            <h1>Products</h1>

            <div className={style.containerTitle}>
              <h3></h3>
              <h3>Name</h3>
              <h3>Category</h3>
              <h3>Price</h3>
              <h3>Description</h3>
              <h3></h3>
              <h3></h3>
            </div>
            {products?.map(p => (
              <div className={style.container} key={p.id}>
                <img src={p.image} alt="" height="70px" width="70px" />
                <p>{p.name}</p>
                <p>{p.category}</p>
                <p>${p.price}</p>
                <p>{p.description}</p>
                <button value={p.id}>edit</button>
                <button value={p.id}>delete</button>
              </div>
            ))}
          </div>
        ) : null}

        {dashboardStatus === 'staff' ? (
          <div>
            <h1>Staff</h1>
            {staff?.map(s => (
              <div className={style.containerStaff} key={s.id}>
                <img src={s.image} alt="" height="70px" width="100px" />
                <p>{s.name}</p>
                <p>{s.password}</p>
                <p>{s.role}</p>
                <p>Tables: {s.tables?.map(t => t).join(' - ')}</p>
                <button>edit</button>
                <button>delete</button>
              </div>
            ))}
          </div>
        ) : null}

        {dashboardStatus === 'tickets' ? (
          <div>
            <h1>Tickets</h1>
            {tickets.orders?.map(t => (
              <div className={style.containerTickets} key={t.id}>
                <p>{t.clientName}</p>
                <p>Mesa: {t.table}</p>
                <p>staff: {t.staff}</p>
                <p>{t.status}</p>
                <p>${t.totalPrice}</p>
                <button value={t.id}>edit</button>
                <button value={t.id}>delete</button>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Admin
