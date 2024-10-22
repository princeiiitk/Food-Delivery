import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    filterprice: 0,
    foodcat: "All Food",
   

}

export const FilterSlice = createSlice({
    name: 'Filter',
    initialState,
    reducers: {
        ChangePrice: (state, action) => {
             
            state.filterprice = action.payload.filterprice;
        },
        foodcategory: (state, action) => {
         
            state.foodcat = action.payload.foodcat;
        },
       
    }

})

export const { ChangePrice, foodcategory} = FilterSlice.actions;
export default FilterSlice.reducer;



