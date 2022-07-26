import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSagaRequest } from './saga'

export const getPeople = createAsyncThunk(
  'peoples/getPeople',
  async thunkAPi => {
    console.log(thunkAPi)
    const res = await fetch('https://swapi.dev/api/people')
    const data = res.json()
    return data
  }
)

const peopleSlice = createSlice({
  name: 'people',
  initialState: { people: [], loading: false, error: null },
  reducers: {
    fetchData: (state, action) => {
      state.loading = false
      state.people = action.payload.results
    }, // fetch data method when the saga call success
    fetchFailed: state => {
      state.loading = false
      state.error = 'something went wrong'
    }, // fetch data method when the saga call failed
  },
  extraReducers: {
    [getSagaRequest]: state => {
      state.loading = true
    }, // the action that rootSaga watching
    [getPeople.pending]: state => {
      state.loading = true
    },
    [getPeople.fulfilled]: (state, action) => {
      state.loading = false
      state.people = action.payload.results
    },
    [getPeople.rejected]: state => {
      state.loading = false
      state.error = 'something went wrong'
    },
  },
  //   extraReducers: builder =>
  //     builder.addCase(getSagaRequest, state => {
  //   state.loading = true
  // }).addCase(getPosts.pending, state => {
  //   state.loading = true
  // })
  // .addCase(getPosts.fulfilled, (state, action) => {
  //   state.loading = false
  //   state.posts = action.payload.results
  // })
  // .addCase(getPosts.rejected, state => {
  //   state.loading = false
  //   state.error = 'something went wrong'
  // }),
})

export const { fetchData, fetchFailed } = peopleSlice.actions

export default peopleSlice.reducer
