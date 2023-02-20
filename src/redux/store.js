import { configureStore } from "@reduxjs/toolkit";
import { bookingReducer } from "react";

export default configureStore({
    reducer:{
        bookings:bookingReducer
    }
    } )

// --legacy-peer-deps