import { Form, InputNumber, Space } from 'antd'
import PropTypes from 'prop-types'

export const ProductItem = ({ productName }) => {
  return (
    <div style={{ justifyContent: 'space-between', alignItems: 'baseline', display: 'flex' }}>
      {productName}
      <Form.Item name={productName}>
        <InputNumber style={{ width: '50px' }} />
      </Form.Item>
    </div>
  )
}

ProductItem.propTypes = {
  productName: PropTypes.string.isRequired,
}
