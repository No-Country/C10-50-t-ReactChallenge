import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice'
import ticketSlice from './slices/tickets.slice'
import staffSlice from './slices/staff.slice'

export default configureStore({
  reducer: {
    products: productsSlice,
    tickets: ticketSlice,
    staff: staffSlice,
  },
})
