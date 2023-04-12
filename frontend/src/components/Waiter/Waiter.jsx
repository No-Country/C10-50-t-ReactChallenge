import { MultipleContainers } from './MultipleContainers'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getProductsThunk } from '../../store/slices/products.slice'
import { ProductsForm } from './ProductsForm'
import Navbar from '../Navbar/Navbar'
import { Button, Modal } from 'antd'
import { getTicketsThunk } from '../../store/slices/tickets.slice'

export const Waiter = () => {
  const dispatch = useDispatch()
  const [products, setproducts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    dispatch(getProductsThunk())
    dispatch(getTicketsThunk())
  }, [])

  const productsState = useSelector(state => state.products)

  useEffect(() => {
    setproducts(productsState.map(product => product))
  }, [productsState])

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleHideModal = () => {
    setIsModalOpen(false)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Navbar isShowed={true} />

      <Button onClick={handleOpenModal}> Create Order</Button>
      <Modal open={isModalOpen} onCancel={handleHideModal} onOk={handleOk} footer={null}>
        <ProductsForm
          products={products.filter(product => product.category === 'food')}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
      <MultipleContainers />
    </>
  )
}
