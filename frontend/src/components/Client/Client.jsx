/* eslint-disable indent */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardMenu from './CardMenu.jsx'
import { getProductsThunk } from '../../store/slices/products.slice'
import { getStaffThunk } from '../../store/slices/staff.slice'
import { deleteAllSelectProductToCart, postTicketThunk } from '../../store/slices/tickets.slice'
import Navbar from '../Navbar/Navbar.jsx'
import './style.css'
import cartImg from '../../assets/icons/cart.svg'
import bowl from '../../assets/icons/bowl.svg'
import trash from '../../assets/icons/fi_trash-2.svg'

const Client = () => {
  const dispatch = useDispatch()
  const [dashCategory, setdashCategory] = useState('entrada')
  const products = useSelector(state => state.products)
  const entradas = products.filter(p => p.category === 'Appetizers')
  const fuerte = products.filter(p => p.category === 'MainDishes')
  const bebidas = products.filter(p => p.category === 'Drinks')
  const postres = products.filter(p => p.category === 'Desserts')
  const tickets = useSelector(state => state.tickets)
  const staff = useSelector(state => state.staff)

  useEffect(() => {
    dispatch(getProductsThunk())
    dispatch(getStaffThunk())
  }, [])

  const [form, setForm] = useState({
    clientName: '',
    staff: '',
    table: '',
    totalPrice: '',
    paymentMethod: 'cash',
    order: [],
  })

  const handleAddDataTicket = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

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

  const onSubmit = e => {
    e.preventDefault()
    const waitersTable = staff?.filter(s => s.role === 'Waiter').map(t => t.tables)
    const waiterSelected = waitersTable[0].includes(form.table) ? 'John' : 'Emily'

    if (tickets.cart.length && form.table) {
      const newTicket = {
        clientName: form.clientName,
        staff: waiterSelected,
        table: form.table,
        totalPrice: totalPayable,
        paymentMethod: 'cash',
        order: tickets.cart,
      }
      console.log(newTicket)
      dispatch(postTicketThunk(newTicket)).then(() => {
        alert('Your order is in process')
      })
    } else {
      alert('You must complete all fields')
    }
  }

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
                <li className="nav_li" onClick={() => setdashCategory('bebidas')}>
                  Drinks
                </li>
              </div>
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
                <li className="nav_li" onClick={() => setdashCategory('postres')}>
                  Desserts
                </li>
              </div>
            </ul>
          </nav>
          <div className="cardContainer">
            {dashCategory === 'bebidas'
              ? bebidas?.map((product, index) => <CardMenu key={index} product={product} />)
              : null}
            {dashCategory === 'entrada'
              ? entradas?.map((product, index) => <CardMenu key={index} product={product} />)
              : null}
            {dashCategory === 'fuerte'
              ? fuerte?.map((product, index) => <CardMenu key={index} product={product} />)
              : null}
            {dashCategory === 'postres'
              ? postres?.map((product, index) => <CardMenu key={index} product={product} />)
              : null}
          </div>
        </div>
        <div className="cart">
          <div className="tittleCartGroup">
            <img src={cartImg}></img>
            <h1 className="titleOrder">Add Order</h1>
          </div>
          <div className="containerCart">
            {tickets.cart?.map(product => {
              return (
                <div key={product.id} className="productsCartContainer">
                  <div className="quantity">{product.quantity}</div>
                  <div className="productName">{product.name}</div>
                  <div className="actionButtons">
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
          <form id="editForm" onSubmit={onSubmit}>
            <input
              name="clientName"
              onChange={handleAddDataTicket}
              className="inputName"
              type="text"
              placeholder="Set your name"
            />
            <div className="containerTable">
              {'Select your table'}
              <select
                name="table"
                onChange={handleAddDataTicket}
                className="inputTable"
                type="text"
              >
                <option value=""></option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
              </select>
            </div>
          </form>
          <h2 className="total">Total payable: ${totalPayable}</h2>
          <button className="btnFinishOrder" form="editForm" onClick={onSubmit}>
            Create Ticket
          </button>
        </div>
      </div>
    </div>
  )
}

export default Client
