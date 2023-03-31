import { useState } from 'react'

export default function CardMenu(props) {
  const [count, setCount] = useState(0)
  return (
    <article className="card">
      <div className="card_head">
        <img className="card_img" src={props.product.image} alt="foto makis" />
        <div className="card_conten">
          <h2 className="card_tittle">{props.product.name}</h2>
          <p className="card_parra">{props.product.description}</p>
        </div>
      </div>
      <hr className="card_line" />
      <div className="card_foot">
        <p className="card_price">{props.product.price}</p>
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
