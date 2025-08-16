import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [],
    carts: [],
  },
  reducers: {
    setProductList: (state,action)=>{
      const products = action.payload;
      state.list = products;
      // console.log("🔥 ~ setProductList ~ state:", state)
      // console.log("🔥 ~ setProductList ~ action:", action)
    },
    setAddToCart : (state , action) =>{
      const product = action.payload; // sản phẩm được thêm vào giỏ hàng
      state.carts.push(product); // thêm 1 sản phẩm vào giỏ hàng
    }
  }
});
export default productSlice.reducer
export const {setProductList, setAddToCart} = productSlice.actions
