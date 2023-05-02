import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
    name: "popup",
    initialState: {
        isOpen: false
    },
    reducers: {
        togglePopup: (state, action) => {
            state.isOpen = action.payload;
        }
    }
}
);

export const {togglePopup} = popupSlice.actions;

export default popupSlice.reducer;