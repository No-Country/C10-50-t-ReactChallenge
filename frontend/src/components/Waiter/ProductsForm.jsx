import { Button, Form, Input } from 'antd'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketsThunk, postTicketThunk } from '../../store/slices/tickets.slice'
import { ProductItem } from './ProductItem'
import { useEffect } from 'react'
export const ProductsForm = ({ isModalOpen, products, setIsModalOpen }) => {
  const [antForm] = Form.useForm()
  const productsState = useSelector(state => state.products)
  const dispatch = useDispatch()

  // crea productos dependiendo su cantidad en un array
  const getOrders = values => {
    const orders = []
    Object.entries(values).forEach(([key, value]) => {
      if (key !== 'table' && key !== 'client') {
        const indexProductId = key.indexOf('__') + 2
        const productId = key.slice(indexProductId)
        const productFound = productsState.find(productState => productState._id === productId)

        for (let i = 0; i < value; i++) {
          orders.push(productFound)
        }
      }
    })
    return orders
  }
  const handleSubmit = values => {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    const orders = getOrders(values)
    const body = {
      clientName: values.client,
      staff: user.name,
      paymentMethod: 'cash',
      order: orders,
      status: 'ordered',
      table: values.table,
      totalPrice: 322, // pendiente por calcular
    }
    dispatch(postTicketThunk(body))
    // const productsForOrder = []
    // for (const [key, value] of Object.entries(values)) {
    //   if (key !== 'table' && key !== 'client') {
    //     productsForOrder.push({ id: key, name: key, quantity: value.toString() })
    //   }
    // }
    // dispatch(
    //   setOrder({
    //     id: uuid4(),
    //     table: values.table,
    //     client: values.client,
    //     products: productsForOrder,
    //     total: 45, // pendiente calcular total
    //   })
    // )
    setIsModalOpen(false)
  }
  useEffect(() => {
    if (!isModalOpen) {
      dispatch(getTicketsThunk())
    }
  }, [handleSubmit])
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '200px', padding: '5px' }}>
      <Form form={antForm} onFinish={handleSubmit}>
        <Form.Item name="table" style={{ width: '100px' }}>
          <Input placeholder="table" required />
        </Form.Item>
        <Form.Item name="client">
          <Input required placeholder="client" />
        </Form.Item>
        {products.map(product => {
          return <ProductItem key={`${product._id}`} productName={product.name} id={product._id} />
        })}

        <Button type="primary" style={{ width: '150px', marginTop: '5px' }} htmlType="submit">
          Create Ticket
        </Button>
      </Form>
    </div>
  )
}

ProductsForm.propTypes = {
  products: PropTypes.array.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
}
