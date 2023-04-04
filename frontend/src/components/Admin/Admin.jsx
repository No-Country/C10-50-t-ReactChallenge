/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './admin.module.css'
import { getProductsThunk } from '../../store/slices/products.slice'
import { getStaffThunk } from '../../store/slices/staff.slice'
import { getTicketsThunk } from '../../store/slices/tickets.slice'

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
    <div className={style.body}>
      <div className={style.navbar}>
        <h1>Admin</h1>
        <div>
          <button onClick={setStatus} value="products">
            Products
          </button>
        </div>
        <div>
          <button onClick={setStatus} value="staff">
            Staff
          </button>
        </div>
        <div>
          <button onClick={setStatus} value="tickets">
            Tickets
          </button>
        </div>
      </div>

      {dashboardStatus === 'products' ? (
        <div>
          <h1>Products</h1>
          {products?.map(p => (
            <div className={style.container} key={p.id}>
              <img src={p.image} alt="" height="70px" width="70px" />
              <p>{p.name}</p>
              <p>${p.price}</p>
              <p>{p.description}</p>
              <button value={p.id}>editar</button>
              <button value={p.id}>eliminar</button>
            </div>
          ))}
        </div>
      ) : null}

      {dashboardStatus === 'staff' ? (
        <div>
          <h1>Staff</h1>
          {staff?.map(s => (
            <div className={style.container} key={s.id}>
              <img src={s.image} alt="" height="70px" width="70px" />
              <p>{s.name}</p>
              <p>${s.price}</p>
              <p>{s.description}</p>
              <button>editar</button>
              <button>eliminar</button>
            </div>
          ))}
        </div>
      ) : null}

      {dashboardStatus === 'tickets' ? (
        <div>
          <h1>Tickets</h1>
          {tickets?.map(t => (
            <div className={style.container} key={t.id}>
              <img src={t.image} alt="" height="70px" width="70px" />
              <p>{t.name}</p>
              <p>${t.price}</p>
              <p>{t.description}</p>
              <button value={t.id}>editar</button>
              <button value={t.id}>eliminar</button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Admin
