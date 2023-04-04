import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice'
import ticketSlice from './slices/tickets.slice'

export default configureStore({
  reducer: {
    products: productsSlice,
    tickets: ticketSlice,

  },
})
