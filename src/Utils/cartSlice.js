import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // state.items.pop();

            // deep cloning items using spread(...)
            const newItems = [...state.items];
            // another way to deep clone using JSON.parse
            // const newItems = JSON.parse(JSON.stringify(state.items));

            // filtering items to remove particular item
            updatedItems = newItems.filter((item) => item.card.info.id !== action.payload.card.info.id)
            // use current to print state items, else it will return a proxy object
            console.log('state',current(state))
            return ({
                items: [...updatedItems]
            })
        },
        clearcart: (state) => {
            state.items.length = 0 // this is one way to do 
            // below way is to return a new object which is set to empty
            // return({
            //     items: []
            // }) // returning a new state is an other way to do
        }
    }
});

// these are the actions 
export const  {addItem,removeItem, clearcart } = cartSlice.actions;

// this is the reducer
export default cartSlice.reducer;