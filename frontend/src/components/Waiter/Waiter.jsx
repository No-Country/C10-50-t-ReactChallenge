import { Button, Modal } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../store/slices/products.slice'
import { getProducts, getTicketsThunk, setItems } from '../../store/slices/tickets.slice'
import Navbar from '../Navbar/Navbar'
import { ProductsForm } from './CreateTicket/ProductsForm'
import { MultipleContainers } from './MultipleContainers'

export const Waiter = () => {
  const dispatch = useDispatch()
  const [products, setproducts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const items = useSelector(state => state.tickets)

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
  // crea productos dependiendo su cantidad en un array
  const getOrders = values => {
    const orders = []
    Object.entries(values).forEach(([key, value]) => {
      if (key !== 'table' && key !== 'client') {
        const indexProductId = key.indexOf('__') + 2
        const productId = key.slice(indexProductId)
        const productFound = productsState.find(productState => productState._id === productId)

        for (let i = 0; i < value; i++) {
          orders.push(productFound)
        }
      }
    })
    return orders
  }

  const handleAddTicket = async values => {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    const orders = getOrders(values)
    const totalPrice = orders.reduce((acc, order) => (acc = acc + order.price), 0)
    const body = {
      clientName: values.client,
      staff: user.name,
      paymentMethod: 'cash',
      order: orders,
      status: 'ordered',
      table: values.table,
      totalPrice,
    }
    try {
      const { data } = await axios.post('/api/ticket/', body)
      const ordersWithQuantity = data.order.length > 0 ? getProducts(data.order) : []

      const newItems = {
        ...items,
        tickets: [
          ...items.tickets,
          {
            id: data._id,
            client: data.clientName,
            total: data.totalPrice,
            ordersWithQuantity,
            table: data.table,
            status: data.status,
            staff: data.staff,
            order: data.order,
          },
        ],
      }
      dispatch(setItems(newItems))
      console.log('ticket creado')
    } catch (error) {
      console.log(error)
    }

    setIsModalOpen(false)
  }
  return (
    <>
      <Navbar isShowed={true} />
      <Toaster position="top-center" reverseOrder={false} />

      <Button
        onClick={handleOpenModal}
        style={{
          marginTop: '5px',
          marginLeft: '5px',
          border: '1px solid rgba(0, 0, 0, 0.35)',
          backgroundColor: '#03314b',
          color: 'white',
        }}
      >
        {' '}
        Create Order
      </Button>
      <Modal open={isModalOpen} onCancel={handleHideModal} onOk={handleOk} footer={null}>
        <ProductsForm products={products} handleAddTicket={handleAddTicket} />
      </Modal>
      <MultipleContainers />
    </>
  )
}
