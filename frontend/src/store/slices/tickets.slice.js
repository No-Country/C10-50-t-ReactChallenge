import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    allTickets: [],
    tickets: [],
    rejecteds: [],
    cooking: [],
    orders: [],
    readys: [],
    inTable: [],
    payables: [],
    ready: [],
    cart: [],
  },
  reducers: {
    setAllTickets: (state, action) => {
      state.allTickets = action.payload
    },

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

    deleteAllSelectProduct: (state, action) => {
      if (action.payload.id) {
        state.cart = [...state.cart.filter(p => p.id !== action.payload.id)]
      }
    },
  },
})

export const getAllTickets = () => dispatch => {
  axios.get('http://localhost:3001/api/ticket/').then(res => {
    dispatch(setAllTickets(res.data)).catch(error => alert(error.message))
  })
}

export const getTicketsThunk = () => dispatch => {
  axios
    .get('http://localhost:3001/api/ticket/')
    .then(res => {
      const ordersAll = res.data.map(orders => {
        const ordersWithQuantity = orders.order.length > 0 ? getProducts(orders.order) : []

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
export const editSelectProductInCart = product => dispatch => {
  dispatch(editSelectProduct(product))
}
export const deleteAllSelectProductToCart = product => dispatch => {
  dispatch(deleteAllSelectProduct(product))
}

export const {
  setAllTickets,
  setItems,
  setTickets,
  setTicketsWithFilters,
  setOrder,
  setCart,
  deleteProduct,
  editSelectProduct,
  deleteAllSelectProduct,
} = ticketSlice.actions

export const postTicketThunk = body => dispatch => {
  axios
    .post('http://localhost:3001/api/ticket/', body)
    .then(res => {
      console.log('ticket creado')
    })
    .catch(error => console.log(error))
}

export default ticketSlice.reducer

export const getProducts = productsDb => {
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
