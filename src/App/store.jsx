import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "../Fatures/UserSlice";

export default configureStore({
    reducer: {
        user: useReducer,
    },
})