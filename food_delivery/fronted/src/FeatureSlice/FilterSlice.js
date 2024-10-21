import {createSlice} from '@reduxjs/toolkit'


const initialState = {
     filterprice:0
}

export const FilterSlice = createSlice({
    name: 'filterprice',
    initialState,
    reducers:{
        ChangePrice: (state, action) => {
           
        state.filterprice = action.payload.filterprice;
    }}

})

export const { ChangePrice } = FilterSlice.actions;
export default FilterSlice.reducer;



