import { createSlice } from '@reduxjs/toolkit'

export const runningSlice = createSlice({
    name: 'running ',
    initialState:{
        running: false,
    },
    reducers: {
      setRunning: (state ,{payload})=>{
        state.running = payload;
      },
    },
  })

  export const { setRunning } = runningSlice.actions;

  export default runningSlice.reducer