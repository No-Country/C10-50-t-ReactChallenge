/* eslint-disable indent */
import { useEffect, useState } from 'react'
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
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  const products = useSelector(state => state.products)
  const entradas = products.filter(p => p.category === 'Appetizers')
  const fuerte = products.filter(p => p.category === 'MainDishes')
  const bebidas = products.filter(p => p.category === 'Drinks')
  const postres = products.filter(p => p.category === 'Desserts')

  const tickets = useSelector(state => state.tickets)
  console.log(tickets.cart.map(c => c))

  // const deleteProduct = async () => {
  //   if (products.id === id) await setCount(0)
  //   await dispatch(
  //     deleteAllSelectProductToCart({
  //       id: products._id,
  //       quantity: 0,
  //       name: products.name,
  //       price: products.price,
  //       category: products.category,
  //       time: products.time,
  //     })
  //   )
  // }
  const initialValue = 0
  const totalPayable = tickets.cart
    .map(p => p.price * p.quantity)
    .reduce((acc, curr) => acc + curr, initialValue)
    .toFixed(2)

  console.log(totalPayable)

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

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
                    <button>
                      <img className="imgButton" src={edit} alt="edit icon" width="30px" />
                    </button>

                    <button
                      onClick={() => {
                        console.log(product.id)
                        dispatch(
                          deleteAllSelectProductToCart({
                            id: product._id,
                            // quantity: 0,
                            name: product.name,
                            price: product.price,
                            category: product.category,
                            time: product.time,
                          })
                        )
                      }}
                    >
                      <img className="imgButton" src={trash} alt="trash icon" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          <form className="form" id="editForm">
            <input className="inputForm" type="text" placeholder="Notes about my food" />
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
