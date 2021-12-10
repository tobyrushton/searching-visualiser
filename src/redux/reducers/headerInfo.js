import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name: 'header ',
    initialState: {
        buttonsDisabled: false,
    },
    reducers: {
      setDisabled: (state ,{payload})=>{
        state.buttonsDisabled = payload;
      },
    },
  })

  export const { setDisabled } = headerSlice.actions;

  export default headerSlice.reducer