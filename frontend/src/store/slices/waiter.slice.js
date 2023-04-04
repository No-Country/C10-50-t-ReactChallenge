import { createSlice } from '@reduxjs/toolkit'
const initialState = {}

export const waiterSlice = createSlice({
  name: 'waiter',
  initialState,
  reducers: {},
})

export const { setIsLoading } = waiterSlice.actions

export default waiterSlice.reducer
