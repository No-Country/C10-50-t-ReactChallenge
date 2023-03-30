import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardMenu from './CardMenu'
import { getProductsThunk } from '../../store/slices/products.slice'
import './style.css'

const Client = () => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  return (
    <div className="menu">
      <h1 className="header">Carta Digital</h1>
      <nav className="nav">
        <ul className="nav_ul">
          <li className="nav_li">Entrada</li>
          <li className="nav_li">Plato Fuerte</li>
          <li className="nav_li">Bebidas</li>
          <li className="nav_li">Postres</li>
        </ul>
      </nav>
      <div>{products}</div>
      <CardMenu />
      <CardMenu />
      <CardMenu />
      <CardMenu />
      <button className="hacer_pedido">Realizar Pedido</button>
    </div>
  )
}

export default Client
