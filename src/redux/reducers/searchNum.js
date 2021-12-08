import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'searchNum',
    initialState: 0,
    reducers: {
      setNum: (state, {payload}) => {
        return payload
      },
    },
  })

  export const { setNum } = searchSlice.actions

  export default searchSlice.reducer
