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
    cart: [],
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
    setCart: (state, action) => {
      const duplicate = state.cart.find(p => p.id === action.payload.id)
      if (duplicate) {
        state.cart = [...state.cart.filter(p => p.id !== duplicate.id), action.payload]
      } else {
        state.cart = [...state.cart, action.payload]
      }
    },
    deleteProduct: (state, action) => {
      if (action.payload.quantity === 0) {
        state.cart = [...state.cart.filter(p => p.id !== action.payload.id)]
      } else {
        state.cart = [...state.cart.filter(p => p.id !== action.payload.id), action.payload]
      }
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

export const addProductToCart = product => dispatch => {
  dispatch(setCart(product))
}
export const deleteProductToCart = product => dispatch => {
  dispatch(deleteProduct(product))
}

export const { setItems, setTickets, setTicketsWithFilters, setOrder, setCart, deleteProduct } =
  ticketSlice.actions

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
