import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { setIsLoading } from './isLoading.slice'

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload
      return products
    },
  },
})

// READ (ALL PRODUCTS)
export const getProductsThunk = () => dispatch => {
  dispatch(setIsLoading(true))
  axios
    .get('http://localhost:3001/api/menu')
    .then(res => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)))
}

// FILTER (PRODUCTS)
export const filterProductsThunk = id => dispatch => {
  dispatch(setIsLoading(true))
  axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
    .then(res => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)))
}

// INPUT SEARCH (PRODUCTS)

export const searchProductsThunk = value => dispatch => {
  dispatch(setIsLoading(true))
  axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${value}`)
    .then(res => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)))
}
export const { setProducts } = productsSlice.actions

export default productsSlice.reducer
