import { createSlice } from "@reduxjs/toolkit";
import { AddToProductsAsync, GetAllProductsAsync } from "../../Action/ProductsAction/ProductsAction";


const initialState = {
    products: [],
    isLoading: false,
    isError: null
}

const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            // GetAllProductsAsync
            .addCase(GetAllProductsAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(GetAllProductsAsync.fulfilled, (state, action) => {
                    state.isLoading = false,
                    state.products = action.payload,
                    state.isError = null
            })
            .addCase(GetAllProductsAsync.rejected, (state, action) => {
                state.isLoading = false,
                    state.products = []
                state.isError = action.error.message
            })

            // add to products
            .addCase(AddToProductsAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(AddToProductsAsync.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.products = payload
                state.isError = null
            })
            .addCase(AddToProductsAsync.rejected, (state, action) => {
                state.isLoading = false
                state.products = []
                state.isError = action.error.message
            })
    }
})
export default productsSlice.reducer