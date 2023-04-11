import { Button, Form, Input } from 'antd'
import PropTypes from 'prop-types'
import { ProductItem } from './ProductItem'
import { useDispatch } from 'react-redux'
import { setItems, setOrder } from '../../store/slices/tickets.slice'
import uuid4 from 'uuid4'
export const ProductsForm = ({ products }) => {
  const [antForm] = Form.useForm()
  const dispatch = useDispatch()
  const handleSubmit = values => {
    const productsForOrder = []
    for (const [key, value] of Object.entries(values)) {
      if (key !== 'table' && key !== 'client') {
        productsForOrder.push({ id: key, name: key, quantity: value.toString() })
      }
    }
    dispatch(
      setOrder({
        id: uuid4(),
        table: values.table,
        client: values.client,
        products: productsForOrder,
        total: 45, // pendiente calcular total
      })
    )
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '200px', padding: '5px' }}>
      <Form form={antForm} onFinish={handleSubmit}>
        <Form.Item name="table" style={{ width: '50px' }}>
          <Input required />
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
}
