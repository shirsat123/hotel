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
    firstName: "Sugat",
    lastName: "bodade",
    phone: "+918007449345",
    email: "sonalidhikale0@gmail.com",
    guest: "2",
    adults: "2",
    childrens:"0" ,
    checkin: "2023-02-22",
    checkout: "2023-02-24",
    category: "Double"
}
]

const bookingSlice = createSlice({name:"bookings",initialState,reducers:{}})

export default bookingSlice.reducer;