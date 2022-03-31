import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const counterUpdate = createAsyncThunk(
    "counter/counterUpdate",
    async (value, thunkApi)=>{
        const response = await fetch("http://localhost:3000/api/updateCounter");
        const data = await response.json();
        return data;
    }
)

export const counterSlice = createSlice({
    name: "Counter",
    initialState:{
        count: 0,
        isLoading:false,
        error:""
    },
    reducers:{
        increment:(state)=>{
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        },
        incrementByAmount:(state, action)=>{
            state.count+=action.payload;
            state.isLoading=false;
        },
    },
    extraReducers:{
        [counterUpdate.fulfilled]:(state, action)=>{
            state.count+=action.payload;
            state.isLoading = false
        },
        [counterUpdate.pending]:(state)=>{
            state.isLoading=true;
        },
        [counterUpdate.rejected]:(state)=>{
            state.isLoading=false;
            state.error="Error in update counter"
        },
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer;