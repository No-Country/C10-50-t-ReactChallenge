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
  },
})

export const getStaffThunk = () => dispatch => {
  axios.get('/staff').then(res => dispatch(setStaff(res.data)))
}

export const { setStaff } = staffSlice.actions

export default staffSlice.reducer
