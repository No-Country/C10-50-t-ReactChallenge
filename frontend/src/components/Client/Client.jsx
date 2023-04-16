/* eslint-disable indent */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardMenu from './CardMenu.jsx'
import { getProductsThunk } from '../../store/slices/products.slice'
import Navbar from '../Navbar/Navbar.jsx'
import './style.css'
import cart from '../../assets/icons/cart.svg'
import bowl from '../../assets/icons/bowl.svg'
import trash from '../../assets/icons/fi_trash-2.svg'
import edit from '../../assets/icons/edit.svg'

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
                  Appetizzers
                </li>
              </div>
              <div>
                <li className="nav_li" onClick={() => setdashCategory('fuerte')}>
                  Main Dishes
                </li>
              </div>
              <div>
                <li className="nav_li" onClick={() => setdashCategory('bebidas')}>
                  Drinks
                </li>
              </div>
              <div>
                <li className="nav_li" onClick={() => setdashCategory('postres')}>
                  Desserts
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
          {/* <button className="hacer_pedido">Realizar Pedido</button> */}
        </div>
        <div className="cart">
          <div className="tittleGroup">
            <img src={cart}></img>
            <h1 className="titleOrder">Add Order</h1>
          </div>
          {tickets.cart?.map(product => {
            return (
              <div key={product.id} className="productsCartContainer">
                <div className="quantity">{product.quantity}</div>
                <div className="productName">{product.name}</div>
                <div className="accionButtons">
                  <button>{/* <img src={edit} alt="" width="33px" /> */}</button>
                  <button>{/* <img src={trash} alt="" /> */}</button>
                </div>
              </div>
            )
          })}
          <button className="btnFinishOrder">Create Ticket</button>
        </div>
      </div>
    </div>
  )
}

export default Client
