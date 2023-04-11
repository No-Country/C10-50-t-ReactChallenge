import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardMenu from './CardMenu.jsx'
import { getProductsThunk } from '../../store/slices/products.slice'
import Navbar from '../Navbar/Navbar.jsx'
import './style.css'

const Client = () => {
  const dispatch = useDispatch()
  const [dashCategory, setdashCategory] = useState('entrada')

  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  return (
    <div>
      <Navbar></Navbar>
      <div className="body">
        <div className="menu">
          <h1>Our Menu</h1>
          <nav className="nav">
            <ul className="nav_ul">
              <div>
                <li className="nav_li">Entrada</li>
              </div>
              <div>
                <li className="nav_li">Plato Fuerte</li>
              </div>
              <div>
                <li className="nav_li">Bebidas</li>
              </div>
              <div>
                <li className="nav_li">Postres</li>
              </div>
            </ul>
          </nav>
          {products?.map(product => {
            return <CardMenu key={product.id} product={product}></CardMenu>
          })}
          <button className="hacer_pedido">Realizar Pedido</button>
        </div>
        <div className="cart">
          <h1>Cart</h1>
          <button>Finish Order</button>
        </div>
      </div>
    </div>
  )
}

export default Client
