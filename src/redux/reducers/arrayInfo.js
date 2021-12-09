import { createSlice } from '@reduxjs/toolkit'

export const arrayInfoSlice = createSlice({
    name: 'arrayInfo',
    initialState: {
        arrayLength: 310,
        height: 730,
        array: [],
        searchNumber: 0,
        sorted: false,
    },
    reducers: {
      setLength: (state, {payload}) => {
        state.arrayLength = payload;
      },
      setHeight: (state, {payload}) => {
        state.height = payload; 
      },
      setArray: (state, {payload}) => {
          state.array = payload;
      },
      setSearchNumber: (state, {payload}) => {
        state.searchNumber = payload; 
      },
      setSortedStatus: (state, {payload}) => {
          state.sorted = payload; 
      },
    },
  })

export const { setLength, setHeight, setArray, setSearchNumber, setSortedStatus } = arrayInfoSlice.actions

export default arrayInfoSlice.reducer