import { createSlice } from "@reduxjs/toolkit";

export const overlaySlice = createSlice({
    name: "overlay",
    initialState: {
        isOpen: false
    },
    reducers: {
        toggleOverlay: (state, action) => {
            state.isOpen = action.payload;
        }
    }
}
);

export const {toggleOverlay} = overlaySlice.actions;

export default overlaySlice.reducer;