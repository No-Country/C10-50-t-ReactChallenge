import { Button, Form, Input } from 'antd'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { postTicketThunk } from '../../store/slices/tickets.slice'
import { ProductItem } from './ProductItem'
export const ProductsForm = ({ products, setIsModalOpen }) => {
  const [antForm] = Form.useForm()
  const dispatch = useDispatch()
  const handleSubmit = values => {
    const body = {
      clientName: values.client,
      staff: 'Waiter',
      paymentMethod: 'cash',
      order: [],
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
    // setIsModalOpen(false)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '200px', padding: '5px' }}>
      <Form form={antForm} onFinish={handleSubmit}>
        <Form.Item name="table" style={{ width: '100px' }}>
          <Input placeholder="table" required />
        </Form.Item>
        <Form.Item name="client">
          <Input required placeholder="client" />
        </Form.Item>
        {products.map((product, index) => {
          return <ProductItem key={`${product.name}-${index}`} productName={product.name} />
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
  setIsModalOpen: PropTypes.func.isRequired,
}
