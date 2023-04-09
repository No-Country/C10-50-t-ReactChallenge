import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    orders: [],
    cooking: [],
    ready: [],
  },
  reducers: {
    setItems: (state, action) => {
      const ticketsList = action.payload
      const prevState = state
      prevState.orders = ticketsList
      return prevState
    },
    setTickets: (state, action) => {
      const newTickets = action.payload
      return newTickets
    },
  },
})

export const getTicketsThunk = () => dispatch => {
  axios
    .get('http://localhost:3001/api/ticket/')
    .then(res => dispatch(setItems(res.data)))
    .catch(error => console.log(error))
}

export const { setItems, setTickets } = ticketSlice.actions

export default ticketSlice.reducer
