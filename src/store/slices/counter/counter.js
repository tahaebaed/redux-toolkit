import { createSlice } from '@reduxjs/toolkit'
import * as reducers from './actions'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers,
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
