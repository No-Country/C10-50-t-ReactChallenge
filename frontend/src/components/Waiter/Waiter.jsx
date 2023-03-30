import { Button } from 'antd'
import { MultipleContainers } from './MultipleContainers'

export const Waiter = () => {
  return (
    <>
      <Button type="primary" style={{ width: '150px' }}>
        Agregar pedido
      </Button>
      <MultipleContainers />
    </>
  )
}
