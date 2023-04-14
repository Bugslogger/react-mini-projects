import { configureStore } from "@reduxjs/toolkit";
import counterRedux  from "./action";

export const store = configureStore({
    reducer: counterRedux
})