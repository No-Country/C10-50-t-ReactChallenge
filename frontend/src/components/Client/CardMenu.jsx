import { useState } from 'react'

const CardMenu = () => {
  const [count, setCount] = useState(0)

  return (
    <article className="card">
      <div className="card_head">
        <img
          className="card_img"
          src="https://www.expodrinksdelifood.com/wp-content/uploads/2020/09/puerto_mancora_restaurante_maki_acevichado.jpg"
          alt="foto makis"
        />
        <div className="card_conten">
          <h2 className="card_tittle">Makis</h2>
          <p className="card_parra">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat neque esse id quibusdam nihil accusantium
            doloremque reprehenderit reiciendis at deserunt cupiditate nam mollitia, distinctio beatae consequuntur
            dolores maiores enim aliquam quis eum nisi aspernatur impedit cumque! Reiciendis iusto delectus magni!
          </p>
        </div>
      </div>
      <hr className="card_line" />
      <div className="card_foot">
        <p className="card_price">S/. 50.00</p>
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

export default CardMenu

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
