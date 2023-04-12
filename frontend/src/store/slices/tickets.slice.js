import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    cooking: [],
    orders: [],
    readys: [],
    inTable: [],
    payables: [],
    ready: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.tickets = action.payload.tickets
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

      state.tickets = allTickets.filter(ticket => ticket.status === 'Requested')
      state.cooking = allTickets.filter(ticket => ticket.status === 'cooking')
      state.readys = allTickets.filter(ticket => ticket.status === 'ready')
      state.inTable = allTickets.filter(ticket => ticket.status === 'Delivered')
      state.payables = allTickets.filter(ticket => ticket.status === 'payable')
    },
  },
})

export const getTicketsThunk = () => dispatch => {
  axios
    .get('http://localhost:3001/api/ticket/')
    .then(res => {
      const ordersAll = res.data.map((orders, index) => {
        const ordersWithQuantity = getProducts(orders.order)

        return {
          id: index.toString(),
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
