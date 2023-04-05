import { MultipleContainers } from './MultipleContainers'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getProductsThunk } from '../../store/slices/products.slice'
import { AddProduct } from './AddProduct'

export const Waiter = () => {
  const dispatch = useDispatch()
  const [products, setproducts] = useState([])

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])
  const productsState = useSelector(state => state.products)

  useEffect(() => {
    setproducts(productsState.map(product => product.name))
  }, [productsState])

  return (
    <>
      <AddProduct products={products} />
      <MultipleContainers />
    </>
  )
}
