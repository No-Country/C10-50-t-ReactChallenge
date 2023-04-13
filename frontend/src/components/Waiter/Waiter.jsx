import { MultipleContainers } from './MultipleContainers'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getProductsThunk } from '../../store/slices/products.slice'
import { ProductsForm } from './ProductsForm'
import Navbar from '../Navbar/Navbar'
import { Button, Modal } from 'antd'
import { getTicketsThunk } from '../../store/slices/tickets.slice'
import { Toaster, toast } from 'react-hot-toast'

export const Waiter = () => {
  const dispatch = useDispatch()
  const [products, setproducts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    dispatch(getProductsThunk())
    dispatch(getTicketsThunk())

    if (user) {
      toast(`Welcome ${user.name}!`, {
        icon: '🤗',
      })
    }
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
      <Toaster position="top-center" reverseOrder={false} />

      <Button onClick={handleOpenModal}> Create Order</Button>
      <Modal open={isModalOpen} onCancel={handleHideModal} onOk={handleOk} footer={null}>
        <ProductsForm
          products={products.filter(product => product.category === 'food')}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
      </Modal>
      <MultipleContainers />
    </>
  )
}
