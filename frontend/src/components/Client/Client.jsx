import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardMenu from './CardMenu.jsx'
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
  )
}

export default Client
