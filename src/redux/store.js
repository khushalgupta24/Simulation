import { configureStore } from "@reduxjs/toolkit";
import popup from "./slice/popupSlice"
import overlay from "./slice/overlaySlice"
import activeTab from "./slice/activeTabSlice"

export default configureStore({
    reducer: {popup, overlay, activeTab},
})

