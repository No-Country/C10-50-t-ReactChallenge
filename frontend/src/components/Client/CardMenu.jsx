import { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addProductToCart, deleteProductToCart } from '../../store/slices/tickets.slice'

export default function CardMenu({ product }) {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  const addProduct = async () => {
    await setCount(count + 1)
    await dispatch(
      addProductToCart({
        id: product._id,
        quantity: count + 1,
        name: product.name,
        price: product.price,
        category: product.category,
        time: product.time,
      })
    )
  }

  const deleteProduct = async () => {
    await setCount(count - 1)
    await dispatch(
      deleteProductToCart({
        id: product._id,
        quantity: count - 1,
        name: product.name,
        price: product.price,
        category: product.category,
        time: product.time,
      })
    )
  }

  return (
    <article className="card">
      <div className="card_head">
        <img className="card_img" src={product.image} alt="foto makis" />
        <div className="card_conten">
          <h2 className="card_tittle">{product.name}</h2>
          <p className="card_parra">{product.description}</p>
        </div>
      </div>
      <hr className="card_line" />
      <div className="card_foot">
        <p className="card_price">${product.price}</p>
        <div>
          <button className="card_btn" disabled={count === 0} onClick={deleteProduct}>
            -
          </button>
          <button className="card_btncount">{count}</button>
          <button className="card_btn" onClick={addProduct}>
            +
          </button>
        </div>
      </div>
    </article>
  )
}
CardMenu.propTypes = {
  product: PropTypes.object.isRequired,
  key: PropTypes.string.isRequired,
}

/* import React from "react";

const CardMenu = () => {
    return
    <div>
        card components
        {/*         hola
        <article>
            <img src="https://www.expodrinksdelifood.com/wp-content/uploads/2020/09/puerto_mancora_restaurante_maki_acevichado.jpg" alt="foto de un maki" />
            <div>
                <h2>Makis</h2>
            </div>
        </article> */
