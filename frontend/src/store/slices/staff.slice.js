import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const staffSlice = createSlice({
  name: 'staff',
  initialState: [],
  reducers: {
    setStaff: (state, action) => {
      const staffList = action.payload
      return staffList
    },

    deleteStaff: (state, action) => {
      const messegge = action.payload
      return messegge
    },
  },
})

export const getStaffThunk = () => dispatch => {
  axios.get('/staff').then(res => dispatch(setStaff(res.data)))
}

export const deleteStaffThunk = id => dispatch => {
  axios.get(`/staff/${id}`).then(res => dispatch(deleteStaff(res.data)))
}

export const { setStaff, deleteStaff } = staffSlice.actions

export default staffSlice.reducer
