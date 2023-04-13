import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice'
import ticketSlice from './slices/tickets.slice'
import staffSlice from './slices/staff.slice'
import isLoadingSlice from './slices/isLoading.slice'
import kitchenSlice from './slices/kitchen.slice'

export default configureStore({
  reducer: {
    products: productsSlice,
    tickets: ticketSlice,
    staff: staffSlice,
    isLoading: isLoadingSlice,
    kitchen: kitchenSlice,
  },
})
