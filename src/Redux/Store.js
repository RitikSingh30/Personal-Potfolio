import { configureStore } from "@reduxjs/toolkit";
import changePageColor from "./Slice/DarkModeSlice";

export const store = configureStore({
    reducer:{
        changePageColor:changePageColor
    },
})