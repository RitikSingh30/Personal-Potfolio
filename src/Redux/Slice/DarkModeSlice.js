import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    darkMode:false 
}

export const changePageColor = createSlice({
    name:"changePageColor",
    initialState,
    reducers:{
        setDarkMode: (state,action) => {
            state.darkMode = action.payload;
        }
    }
})

export const {setDarkMode} = changePageColor.actions
export default changePageColor.reducer 