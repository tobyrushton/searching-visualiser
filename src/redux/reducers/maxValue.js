import { createSlice } from '@reduxjs/toolkit'

export const maxSlice = createSlice({
    name: 'maxValue',
    initialState: 730,
    reducers: {
      setMax: (state, {payload}) => {
        return payload
      },
    },
  })

  export const { setMax } = maxSlice.actions

  export default maxSlice.reducer