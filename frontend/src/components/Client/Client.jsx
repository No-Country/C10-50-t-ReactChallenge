/* eslint-disable indent */
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
  const entradas = products.filter(p => p.category === 'Appetizers')
  const fuerte = products.filter(p => p.category === 'MainDishes')
  const bebidas = products.filter(p => p.category === 'Drinks')
  const postres = products.filter(p => p.category === 'Desserts')

  const tickets = useSelector(state => state.tickets)
  console.log(tickets)
  console.log(products)

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
                <li className="nav_li" onClick={() => setdashCategory('entrada')}>
                  Entrada
                </li>
              </div>
              <div>
                <li className="nav_li" onClick={() => setdashCategory('fuerte')}>
                  Plato Fuerte
                </li>
              </div>
              <div>
                <li className="nav_li" onClick={() => setdashCategory('bebidas')}>
                  Bebidas
                </li>
              </div>
              <div>
                <li className="nav_li" onClick={() => setdashCategory('postres')}>
                  Postres
                </li>
              </div>
            </ul>
          </nav>
          <div className="cardContainer">
            {dashCategory === 'entrada'
              ? entradas?.map(product => {
                  return <CardMenu key={product.id} product={product}></CardMenu>
                })
              : null}
            {dashCategory === 'fuerte'
              ? fuerte?.map(product => {
                  return <CardMenu key={product.id} product={product}></CardMenu>
                })
              : null}
            {dashCategory === 'bebidas'
              ? bebidas?.map(product => {
                  return <CardMenu key={product.id} product={product}></CardMenu>
                })
              : null}
            {dashCategory === 'postres'
              ? postres?.map(product => {
                  return <CardMenu key={product.id} product={product}></CardMenu>
                })
              : null}
          </div>
          <button className="hacer_pedido">Realizar Pedido</button>
        </div>
        <div className="cart">
          <h1>Cart</h1>
          {tickets.cart?.map(product => {
            return (
              <div key={product.id} className="productsCartContainer">
                x{product.quantity} {product.name}
              </div>
            )
          })}
          <button>Finish Order</button>
        </div>
      </div>
    </div>
  )
}

export default Client
