import {configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./slices/peopleSlice";
import planetReducer from "./reducers/planetReducer";

export default configureStore({
    reducer: {people: peopleSlice.reducer, planets: planetReducer},
})
