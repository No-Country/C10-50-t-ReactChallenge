/* eslint-disable react/prop-types */

const CookingList = ({ cooking, setCooking }) => {
  const orderReady = (orderData) => {
    const newCooking = cooking.filter(order => order.id !== orderData.id)
    setCooking(newCooking)
  }
  return (
    <section className="cooking">
      <h1>Cocinando</h1>
      <div className="card-container-cooking">
        {cooking.map(order => (
          <div className="card-cooking" key={order.id}>
            <p className='card-paragraph'>#{order.id}</p>
            <p className='card-paragraph'> {order.quantity} x {order.title}</p>
            <p className="card-paragraph"><b>Nota: </b>{order.description}</p>
            <span className="card-check" onClick={() => orderReady(order)}>OK</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CookingList
