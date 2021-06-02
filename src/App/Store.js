import{configureStore} from "@reduxjs/toolkit";
import carReducer from "../Features/car/CarSlivce"

export const store = configureStore({
    reducer:{
        car:carReducer
    },
});

export default store;