import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    orders: [],
    kitchens: [],
    readys: [],
    inTable: [],
    payables: [],
    ready: [],
    cooking: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.orders = action.payload.orders
      state.kitchens = action.payload.kitchens
      state.readys = action.payload.readys
      state.inTable = action.payload.inTable
      state.kitchens = action.payload.kitchens
      state.payables = action.payload.payables
      state.tickets = action.payload
    },
    setOrder: (state, action) => {
      state.orders = [...state.orders, action.payload]
    },
    setTickets: (state, action) => {
      const newTickets = action.payload.tickets
      state.tickets = newTickets
    },
  },
})

export const getTicketsThunk = () => dispatch => {
  axios
    .get('http://localhost:3001/api/ticket/')
    .then(res => dispatch(setItems(res.data)))
    .catch(error => console.log(error))
}

export const { setItems, setTickets, setOrder } = ticketSlice.actions

export default ticketSlice.reducer
