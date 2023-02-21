import { configureStore } from "@reduxjs/toolkit";
import  bookingReducer  from "./booking";

export default configureStore({
    reducer:{
        bookings:bookingReducer
    }
    } )

