import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice'
import ticketSlice from './slices/tickets.slice'

export default configureStore({
  reducer: {
    getProducts: productsSlice,
    tickets: ticketSlice,
  },
})
