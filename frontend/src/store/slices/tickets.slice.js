import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    rejecteds: [],
    cooking: [],
    orders: [],
    readys: [],
    inTable: [],
    payables: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.tickets = action.payload.tickets
      state.rejecteds = action.payload.rejecteds
      state.cooking = action.payload.cooking
      state.readys = action.payload.readys
      state.inTable = action.payload.inTable
      state.payables = action.payload.payables
    },
    setOrder: (state, action) => {
      state.orders = [...state.orders, action.payload]
    },
    setTickets: (state, action) => {
      const newTickets = action.payload.tickets
      state.tickets = newTickets
    },
    setTicketsWithFilters: (state, action) => {
      const allTickets = action.payload

      state.tickets = allTickets.filter(ticket => ticket.status === 'ordered')
      state.rejecteds = allTickets.filter(ticket => ticket.status === 'rejected')
      state.cooking = allTickets.filter(ticket => ticket.status === 'cooking')
      state.readys = allTickets.filter(ticket => ticket.status === 'ready progress')
      state.inTable = allTickets.filter(ticket => ticket.status === 'in table')
      state.payables = allTickets.filter(ticket => ticket.status === 'payable')
    },
  },
})

export const getTicketsThunk = () => dispatch => {
  axios
    .get('http://localhost:3001/api/ticket/')
    .then(res => {
      const ordersAll = res.data.map(orders => {
        const ordersWithQuantity = getProducts(orders.order)

        return {
          id: orders._id,
          client: orders.clientName,
          ordersWithQuantity,
          total: orders.totalPrice,
          table: orders.table,
          status: orders.status,
          staff: orders.staff,
          order: orders.order,
        }
      })
      dispatch(setTicketsWithFilters(ordersAll))
    })
    .catch(error => console.log(error))
}

export const postTicketThunk = body => dispatch => {
  axios
    .post('http://localhost:3001/api/ticket/', body)
    .then(res => {
      console.log('ticket creado')
    })
    .catch(error => console.log(error))
}

export const { setItems, setTickets, setTicketsWithFilters, setOrder } = ticketSlice.actions

export default ticketSlice.reducer

const getProducts = productsDb => {
  const busqueda = productsDb.reduce((acc, productDb) => {
    acc[productDb.name] = ++acc[productDb.name] || 1
    return acc
  }, {})

  const products = Object.entries(busqueda).map(([key, value], index) => ({
    id: index,
    name: key,
    quantity: value,
  }))
  return products
}
