import { Button, Form, Tabs } from 'antd'
import PropTypes from 'prop-types'
import { ProductItems } from './ProductItems'

export const ProductsForm = ({ products, handleAddTicket }) => {
  const [antForm] = Form.useForm()

  const items = [
    {
      key: '1',
      label: 'Food',
      children: <ProductItems products={products} category="food" />,
    },
    {
      key: '2',
      label: 'Main Dishes',
      children: <ProductItems products={products} category="MainDishes" />,
    },
    {
      key: '3',
      label: 'Drinks',
      children: <ProductItems products={products} category="Drinks" />,
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '5px' }}>
      <Form
        form={antForm}
        onFinish={values => {
          handleAddTicket(values)
          antForm.resetFields()
        }}
        initialValues={{ table: '1' }}
      >
        <Tabs defaultActiveKey="1" items={items}></Tabs>

        <Button type="primary" style={{ width: '150px', marginTop: '5px' }} htmlType="submit">
          Create Ticket
        </Button>
      </Form>
    </div>
  )
}

ProductsForm.propTypes = {
  products: PropTypes.array.isRequired,
  handleAddTicket: PropTypes.func.isRequired,
}
