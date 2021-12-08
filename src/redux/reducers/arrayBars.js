import { createSlice } from '@reduxjs/toolkit'

export const barsSlice = createSlice({
    name: 'arrayBars',
    initialState: 310,
    reducers: {
      setBars: (state, {payload}) => {
        return payload
      },
    },
  })

  export const { setBars } = barsSlice.actions

  export default barsSlice.reducer