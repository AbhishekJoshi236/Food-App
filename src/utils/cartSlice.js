import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[],
    },
    reducers: {
        addItem: (state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            // state.items.pop();
            const itemId = action.payload;
            state.items = state?.items?.filter((card) => card?.card?.info?.id !== itemId)
        },
        clearCart: (state,action) => {
            state.items.length = 0;
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;