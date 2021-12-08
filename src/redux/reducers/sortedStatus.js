import { createSlice } from '@reduxjs/toolkit'

export const sortedSlice = createSlice({
    name: 'sortedStatus',
    initialState: false,
    reducers: {
      setSortedStatus: (state, {payload}) => {
        return payload
      },
    },
  })

  export const { setSortedStatus } = sortedSlice.actions

  export default sortedSlice.reducer