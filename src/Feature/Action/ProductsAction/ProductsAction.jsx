import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// get products all data form api
export const GetAllProductsAsync = createAsyncThunk("products/GetAllProductsAsync", async () => {
  try {
    const res = await axios.get("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
    const products = res.data.Items
    return products
  } catch (error) {
    throw new Error(error.message)
  }
})

// add to products

export const AddToProductsAsync = createAsyncThunk("products/AddToProductsAsync", async (newProducts) => {
  try {
    const res = await axios.post('', newProducts)  // replace your post url
    console.log(res)
    const products = res.data
    return products
  } catch (error) {
    toast.error(`${error.code}`)
    throw new Error(error.message)
  }
})