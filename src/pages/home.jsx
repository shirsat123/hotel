import "./home.css";
import { useFormik } from "formik";
import { BookingFormSchema } from "./validation";

export default function Home() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      guest: "",
      adults: "",
      childrens: "",
      checkin: "",
      checkout: "",
      category: "",
    },
    validationSchema: BookingFormSchema,
    onSubmit: async (value) => {
      console.log(value);
    },
  });

  return (
  <>
  <div id="home">
      <h1 id="head">WELCOME!!!</h1>
    {/* </div> */}

    {/* <div id="background"></div>
      <div id="main">
        <div id="content">
          <img src=""></img> */}
          <h3 >Enjoy Your Dream Vacation</h3>
          
        </div>
        {/* </div> */}

        <div id="container">
           <form onSubmit={formik.handleSubmit}>
             <h2> Hotel Booking Form</h2>

            <div>
              <input
                name="firstName"
                type={"text"}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                placeholder="First Name"
              ></input>
              <div className="error">
                {formik.errors.firstName && (
                  <div style={{ color: "red" }}>{formik.errors.firstName}</div>
                )}
              </div>
            </div>

            <div>
               <input
                name="lastName"
                type={"text"}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                placeholder="Last Name"
              ></input>
              <div className="error">
                {" "}
                {formik.errors.lastName && (
                  <div style={{ color: "red" }}>{formik.errors.lastName}</div>
                )}
              </div>
            </div>

            <div>
              <input
                name="phone"
                type={"text"}
                onChange={formik.handleChange}
                value={formik.values.phone}
                placeholder="Phone Number"
              ></input>
              <div className="error">
                {formik.errors.phone && (
                  <div style={{ color: "red" }}>{formik.errors.phone}</div>
                )}{" "}
              </div>
            </div>

            <div>
              <input
                name="email"
                type={"email"}
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="E-Mail"
              ></input>
              <div className="error">
                {" "}
                {formik.errors.email && (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                )}{" "}
              </div>
            </div>

            <div>
               <input
                name="guest"
                type={"number"}
                min={"0"}
                onChange={formik.handleChange}
                value={formik.values.guest}
                placeholder="Guests"
              ></input>
              </div>

              <div>
              <input
                name="adults"
                type={"number"}
                min={"0"}
                onChange={formik.handleChange}
                value={formik.values.adults}
                placeholder="Adults"
              ></input>
            </div>

            <div>
              <input
                name="childrens"
                type={"number"}
                min={"0"}
                onChange={formik.handleChange}
                value={formik.values.childrens}
                placeholder="Childrens"
              ></input>
            </div>

            <div>
              <div id="label">
                <label>Check-in:</label>
              </div>
              <input
                name="checkin"
                type={"date"}
                onChange={formik.handleChange}
                value={formik.values.checkin}
                
                id="date"
              ></input>
            </div>

            <div>
              <div id="label">
                <label>Check-out:</label>
              </div>
              <input
                name="checkout"
                type={"date"}
                onChange={formik.handleChange}
                value={formik.values.checkout}
                id="date"
              ></input>
            </div>

            <div>
              <div id="label">
                <label>Room Type:</label>
              </div>
              <select name="category" onChange={formik.handleChange}>
                <option value={formik.values.single}>Single</option>
                <option value={formik.values.double}>Double</option>
                <option value={formik.values.triple}>Triple</option>
                <option value={formik.values.quad}>Quad</option>
                <option value={formik.values.suite}>Suite</option>
              </select>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
</>
);
}





    
  

  
    

            

           