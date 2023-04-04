/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './admin.module.css'
import { getProductsThunk } from '../../store/slices/products.slice'

const Admin = () => {
  const [dashboardStatus, setDashboardStatus] = React.useState('products')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  const products = useSelector(state => state.products)

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
              <button>editar</button>
              <button>eliminar</button>
            </div>
          ))}
        </div>
      ) : null}

      {dashboardStatus === 'staff' ? (
        <div>
          <h1>soy el staff</h1>
          {/* {staff?.map(s => (
            <div className={style.container} key={s.id}>
              <img src={s.image} alt="" height="70px" width="70px" />
              <p>{s.name}</p>
              <p>${s.price}</p>
              <p>{s.description}</p>
              <button>editar</button>
              <button>eliminar</button>
            </div>
          ))} */}
        </div>
      ) : null}

      {dashboardStatus === 'tickets' ? (
        <div>
          <h1>soy los tickets</h1>
        </div>
      ) : null}
    </div>
  )
}

export default Admin
