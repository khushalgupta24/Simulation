import { createSlice } from "@reduxjs/toolkit";

export const activeTabSlice = createSlice({
    name: "activeTab",
    initialState: {
        currState: 0
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.currState = action.payload;
        }
    }
}
);

export const {setActiveTab} = activeTabSlice.actions;

export default activeTabSlice.reducer;