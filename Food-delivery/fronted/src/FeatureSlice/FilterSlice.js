import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    filterprice: 0,
    foodcat: "All Food",
    Search: ""

}

export const FilterSlice = createSlice({
    name: 'filterprice',
    initialState,
    reducers: {
        ChangePrice: (state, action) => {

            state.filterprice = action.payload.filterprice;
        },
        foodcategory: (state, action) => {

            state.foodcat = action.payload.foodcat;
        },
        SearchCategory: (state, action) => {

            state.Search = action.payload.Search
        }
    }

})

export const { ChangePrice, foodcategory, SearchCategory } = FilterSlice.actions;
export default FilterSlice.reducer;



