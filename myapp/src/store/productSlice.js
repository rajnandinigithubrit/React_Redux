import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.IDLE,


    },
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload
        // },
        // setStatus(state,action){
        //     state.status = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state, action) => {
                state.status = STATUS.LOADING
            })
            .addCase(fetchProduct.fulfilled,(state,action)=>{
                state.data = action.payload;
                state.status = STATUS.IDLE;
            })
            .addCase(fetchProduct.rejected,(state,action) =>{
                state.status = STATUS.ERROR
            })
    }
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer

//Thunk

// export function fetchProduct() {
//     return async function fetchProductThunk(dispatch, getState) {
//        dispatch(setStatus(STATUS.LOADING))
//         try {
//             const res = await fetch('https://fakestoreapi.com/products')
//             const data = await res.json()
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUS.IDLE))
//             console.log(data, "redux")
//         }
//         catch (err) {
//             dispatch(setStatus(STATUS.ERROR))
//             console.log(err)
//         }
//     }
// }


export const fetchProduct = createAsyncThunk('product/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data;
})