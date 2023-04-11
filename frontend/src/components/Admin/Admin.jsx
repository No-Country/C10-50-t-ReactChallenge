/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './admin.module.css'
import { getProductsThunk } from '../../store/slices/products.slice'
import { getStaffThunk } from '../../store/slices/staff.slice'
import { getTicketsThunk } from '../../store/slices/tickets.slice'
import Navbar from '../Navbar/Navbar'
import flechita from '../../assets/icons/fi_chevron-right.png'

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
  console.log(tickets)

  const setStatus = element => {
    setDashboardStatus(element.target.value)
  }

  return (
    <div>
      <Navbar isShowed={true} />
      <div className={style.body}>
        <div>
          <h2 className={style.h2}>Administration</h2>
          <div className={style.navbar}>
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
        </div>

        {dashboardStatus === 'products' ? (
          <div>
            <img src={flechita} alt="" className={style.flechita} />
            <h2 className={style.h2}>Products</h2>
            <div className={style.props}>
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
                  <img src={p.image} alt="" />
                  <p>{p.name}</p>
                  <p>{p.category}</p>
                  <p>${p.price}</p>
                  <p>{p.description}</p>
                  <button value={p.id} className={style.btnedit}>
                    Edit
                  </button>
                  <button value={p.id} className={style.btndel}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {dashboardStatus === 'staff' ? (
          <div>
            <div>
              <img src={flechita} alt="" className={style.flechita} />
              <h2 className={style.h2}>Staff</h2>
            </div>
            <div className={style.props}>
              <div className={style.containerTitle}>
                <h3></h3>
                <h3>Name</h3>
                <h3>Password</h3>
                <h3>Role</h3>
                <h3>Tables</h3>
                <h3></h3>
                <h3></h3>
              </div>
              {staff?.map(s => (
                <div className={style.containerStaff} key={s.id}>
                  <img src={s.image} alt="" height="70px" width="100px" />
                  <p>{s.name}</p>
                  <p>{s.password}</p>
                  <p>{s.role}</p>
                  <p>{s.tables?.map(t => t).join(' - ')}</p>
                  <button value={s.id} className={style.btnedit}>
                    Edit
                  </button>
                  <button value={s.id} className={style.btndel}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {dashboardStatus === 'tickets' ? (
          <div>
            <img src={flechita} alt="" className={style.flechita} />
            <h2 className={style.h2}>Tickets</h2>
            <div className={style.props}>
              <div className={style.containerTitle}>
                <h3>Client Name</h3>
                <h3>Table</h3>
                <h3>Staff</h3>
                <h3>State</h3>
                <h3>Total Price</h3>
                <h3></h3>
                <h3></h3>
              </div>
              {tickets.tickets?.map(t => (
                <div className={style.containerTickets} key={t.id}>
                  <p>{t.clientName}</p>
                  <p>{t.table}</p>
                  <p>{t.staff}</p>
                  <p>{t.status}</p>
                  <p>${t.totalPrice}</p>
                  <button value={t.id} className={style.btnedit}>
                    Edit
                  </button>
                  <button value={t.id} className={style.btndel}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Admin
