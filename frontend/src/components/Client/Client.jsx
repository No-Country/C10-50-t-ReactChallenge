/* eslint-disable indent */
import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardMenu from './CardMenu.jsx'
import { getProductsThunk } from '../../store/slices/products.slice'
import { deleteAllSelectProductToCart } from '../../store/slices/tickets.slice'
import Navbar from '../Navbar/Navbar.jsx'
import './style.css'
import cart from '../../assets/icons/cart.svg'
import bowl from '../../assets/icons/bowl.svg'
import trash from '../../assets/icons/fi_trash-2.svg'
import edit from '../../assets/icons/edit.svg'

const Client = () => {
  const [dashCategory, setdashCategory] = useState('entrada')
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    clientName: '',
    staff: '',
    table: '',
    totalPrice: 0,
    paymentMethod: 'cash',
    order: [],
  })

  const hijo = useRef(null)
  const products = useSelector(state => state.products)
  const entradas = products.filter(p => p.category === 'Appetizers')
  const fuerte = products.filter(p => p.category === 'MainDishes')
  const bebidas = products.filter(p => p.category === 'Drinks')
  const postres = products.filter(p => p.category === 'Desserts')
  const tickets = useSelector(state => state.tickets)
  const cart = useSelector(state => state.cart)
  const staff = useSelector(state => state.staff)

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  const deleteProduct = async e => {
    e.preventDefault()
    await dispatch(
      deleteAllSelectProductToCart({
        id: e.target.value,
      })
    )
  }

  const initialValue = 0
  const totalPayable = tickets.cart
    .map(p => p.price * p.quantity)
    .reduce((acc, curr) => acc + curr, initialValue)
    .toFixed(2)

  return (
    <div>
      <Navbar></Navbar>
      <div className="body">
        <div className="menu">
          <div className="tittleMenuGroup">
            <img src={bowl} width="35px"></img>
            <h1>Our Menu</h1>
          </div>
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
                  return <CardMenu key={product.id} product={product} ref={hijo}></CardMenu>
                })
              : null}
            {dashCategory === 'fuerte'
              ? fuerte?.map(product => {
                  return <CardMenu key={product.id} product={product} ref={hijo}></CardMenu>
                })
              : null}
            {dashCategory === 'bebidas'
              ? bebidas?.map(product => {
                  return <CardMenu key={product.id} product={product} ref={hijo}></CardMenu>
                })
              : null}
            {dashCategory === 'postres'
              ? postres?.map(product => {
                  return <CardMenu key={product.id} product={product} ref={hijo}></CardMenu>
                })
              : null}
          </div>
        </div>
        <div className="cart">
          <div className="tittleCartGroup">
            <img src={cart}></img>
            <h1 className="titleOrder">Add Order</h1>
          </div>
          <div className="containerCart">
            {tickets.cart?.map(product => {
              return (
                <div key={product.id} className="productsCartContainer">
                  <div className="quantity">{product.quantity}</div>
                  <div className="productName">{product.name}</div>
                  <div className="actionButtons">
                    <img src={edit} alt="edit icon" width="30px" />
                    <button className="iconButton"></button>
                    <img src={trash} alt="trash icon" />
                    <button
                      className="iconButton"
                      key="eliminar boton"
                      value={product.id}
                      onClick={deleteProduct}
                    ></button>
                  </div>
                </div>
              )
            })}
          </div>
          <form id="editForm">
            <input
              /* onChange={} */ className="inputName"
              type="text"
              placeholder="Set your name"
            />
            <input
              /* onChange={} */ className="inputNotes"
              type="text"
              placeholder="Notes about my food"
            />
          </form>
          <h2 className="total">Total payable: ${totalPayable}</h2>
          <button className="btnFinishOrder" form="editForm">
            Create Ticket
          </button>
        </div>
      </div>
    </div>
  )
}

export default Client
