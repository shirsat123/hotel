import { createSlice } from "@reduxjs/toolkit";

const initialState=[{
    firstName: "Sonali",
    lastName: "Shirsat",
    phone: "+918007449345",
    email: "sonalidhikale0@gmail.com",
    guest: "2",
    adults: "2",
    childrens:"0" ,
    checkin: "2023-02-22",
    checkout: "2023-02-24",
    category: "Double"
},
{
    firstName: "Siddhi",
    lastName: "Shirsat",
    phone: "+919623920971",
    email: "shirsatsonali123@gmail.com",
    guest: "2",
    adults: "4",
    childrens:"1" ,
    checkin: "2023-02-22",
    checkout: "2023-02-24",
    category: "Single"
}
]

const bookingSlice = createSlice({name:"bookings",initialState,reducers:{
    bookingAdded(state,action){
        state.push(action.payload)
    }
}})

export const {bookingAdded}= bookingSlice.actions
export default bookingSlice.reducer;
