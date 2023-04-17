import { Form, Input, InputNumber, Select } from 'antd'
import PropTypes from 'prop-types'

export const ProductItems = ({ products, category }) => {
  return (
    <>
      <Form.Item name="table" style={{ width: '100px' }}>
        <Select
          placeholder="table"
          required
          options={[
            { value: '1', label: 'Table 1' },
            { value: '2', label: 'Table 2' },
            { value: '3', label: 'Table 3' },
            { value: '4', label: 'Table 4' },
            { value: '5', label: 'Table 5' },
          ]}
        />
      </Form.Item>
      <Form.Item name="client">
        <Input required placeholder="client" />
      </Form.Item>
      {products
        .filter(product => product.category === category)
        .map((product, index) => {
          return (
            <div
              key={index}
              style={{ justifyContent: 'space-between', alignItems: 'baseline', display: 'flex' }}
            >
              {product.name}
              <Form.Item name={`${product.name}__${product._id}`}>
                <InputNumber style={{ width: '50px' }} />
              </Form.Item>
            </div>
          )
        })}
    </>
  )
}

ProductItems.propTypes = {
  products: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
}
