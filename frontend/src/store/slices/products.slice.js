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
    .get('/menu')
    .then(res => {
      dispatch(setProducts(res.data))
    })
    .finally(() => dispatch(setIsLoading(false)))
}

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer
