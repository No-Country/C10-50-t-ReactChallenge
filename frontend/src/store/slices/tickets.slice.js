import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState: [],
  reducers: {
    setTicket: (state, action) => {
      const ticketsList = action.payload
      return ticketsList
    },
  },
})

export const getTicketsThunk = () => dispatch => {
  axios.get('http://localhost:3001/api/ticket/').then(res => dispatch(setTicket(res.data)))
}

export const { setTicket } = ticketSlice.actions

export default ticketSlice.reducer
