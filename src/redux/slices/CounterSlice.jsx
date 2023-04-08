import { createSlice } from "@reduxjs/toolkit";


const initialState={
    value:0,
};
export const CounterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        resetter:(state)=>{
            state.value=0;
        }
    }
})
export const{increment,decrement,resetter}=CounterSlice.actions;
export default CounterSlice.reducer;