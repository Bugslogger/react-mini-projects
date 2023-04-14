import { createSlice } from "@reduxjs/toolkit";

export const counterRedux = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increament: state=>{
            console.log(state);
            state.value += 1
        },
        decreament: state=>{
            console.log(state);
            state.value -= 1
        }
    }
})

export default counterRedux.reducer
export const {decreament,increament} = counterRedux.actions