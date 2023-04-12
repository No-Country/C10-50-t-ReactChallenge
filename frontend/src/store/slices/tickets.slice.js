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
    setOrders: (state, action) => {
      state.orders = action.payload
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
    .then(res => {
      const ordersAll = res.data.map((orders, index) => {
        const products = getProducts(orders.order)

        return {
          id: index.toString(),
          client: orders.clientName,
          products,
          total: orders.totalPrice,
          table: orders.table,
        }
      })
      dispatch(setOrders(ordersAll))
    })
    .catch(error => console.log(error))
}

export const { setItems, setTickets, setOrder, setOrders } = ticketSlice.actions

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
