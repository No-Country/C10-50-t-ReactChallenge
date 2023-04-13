import { Form, InputNumber } from 'antd'
import PropTypes from 'prop-types'

export const ProductItem = ({ id, productName }) => {
  return (
    <div style={{ justifyContent: 'space-between', alignItems: 'baseline', display: 'flex' }}>
      {productName}
      <Form.Item name={`${productName}__${id}`}>
        <InputNumber style={{ width: '50px' }} />
      </Form.Item>
    </div>
  )
}

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
}
