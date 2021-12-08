import { createSlice } from '@reduxjs/toolkit'

export const countSlice = createSlice({
    name: 'count ',
    initialState: {
        comparisonCount: 0,
    },
    reducers: {
      incrementCount: state => {
        state.comparisonCount += 1;
      },
      resetCount: state =>{
        state.comparisonCount = 0;
      },
    },
  })

  export const { incrementCount, resetCount } = countSlice.actions;



  export default countSlice.reducer