import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
    name: "navbar",
    initialState: {
        isMenuOpen: false,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen =!state.isMenuOpen;
        },
    },
})

export const { toggleMenu } = navbarSlice.actions;
export default navbarSlice.reducer;