import { useState } from 'react'
import PropTypes from 'prop-types'

export default function CardMenu({ product }) {
  const [count, setCount] = useState(0)
  console.log(product)
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
          <button className="card_btn" onClick={() => setCount(count => count - 1)}>
            -
          </button>
          <button className="card_btncount">{count}</button>
          <button className="card_btn" onClick={() => setCount(count => count + 1)}>
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
