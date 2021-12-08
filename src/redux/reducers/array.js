import { createSlice } from '@reduxjs/toolkit'

export const arraySlice = createSlice({
  name: 'array',
  initialState:[],
  reducers: {
    setArray: (state,  { payload } ) => {
      return payload;
    },
  },
})


export const { setArray } = arraySlice.actions

export default arraySlice.reducer
