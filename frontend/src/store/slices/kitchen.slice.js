import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const kitchenSlice = createSlice({
  name: 'kitchen',
  initialState: {
    ordered: [],
    cooking: [],
    ready: [],
  },
  reducers: {
    setItems: (state, action) => {
      const ticketsList = action.payload
      const prevState = state
      prevState.ordered = ticketsList.filter(ticket => ticket.status === 'ordered')
      prevState.cooking = ticketsList.filter(ticket => ticket.status === 'cooking')
      prevState.ready = ticketsList.filter(ticket => ticket.status === 'ready progress')

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
    .get('/ticket/')
    .then(res => dispatch(setItems(res.data)))
    .catch(error => console.log(error))
}

export const { setItems, setTickets } = kitchenSlice.actions

export default kitchenSlice.reducer
