import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;









/**
 * Create Store
 *  - configureStore() - import from RTK
 * 
 * Provide my store to app
 *  - <Provider store = {store}> - import from react-redux
 * 
 * Slice
 *  - RTK - createSlice ({
 *      name: "",
 *      initialState:
 *      reducers: {
 *          addItem: (state, action)=> {state = action.payload }
 *   
 *      }
 *    })
 * 
 * 
 * export const { addItem, removeItem, clearCart } = createSlice.actions; 
 * export default cartSlice.reducer;
 * 
 * 
 * 
 * Put that Slice into Store
 *          - {
 *          reducer: {
 *          cart: cartSlice,
 *          user: userSlice
 *         }
 *     }
 */