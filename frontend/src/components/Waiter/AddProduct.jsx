import { Button, Select } from 'antd'
import PropTypes from 'prop-types'

export const AddProduct = ({ products }) => {
  const options = products.map(product => ({ value: product, label: product }))
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '200px', padding: '5px' }}>
      <Select options={options}> </Select>
      <Button type="primary" style={{ width: '150px', marginTop: '5px' }}>
        Agregar pedido
      </Button>
    </div>
  )
}

AddProduct.propTypes = {
  products: PropTypes.array.isRequired,
}
