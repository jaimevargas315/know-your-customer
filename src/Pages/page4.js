import React from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';



export default function Page4() {

    const location = useLocation();

    const handleSubmit = (event) => {
        // Add your code to save the data to a database or server here.
    }

    return (
        <div>          
            <header><h1>MedLab Registration Form</h1></header>
            <form>
            <h2>Review</h2>
            <label>First name:</label>          
            <label id="first_name" >{location.state.first_name}</label><br/> 

            <label>Last name:</label>
            <label id="last_name">{location.state.last_name}</label><br/>

            <label>Email:</label>
            <label id="email">{location.state.email}</label><br/>

            <label>Date of birth:</label>
            <label id="dob">{location.state.DOB}</label><br/>

            <label>Phone number:</label>
            <label id="phone_number">{location.state.phone}</label><br/>

            <label>Address:</label>
            <label id="page4_address">{location.state.address1}</label><br/>

            <label>Address 2:</label>
            <label id="page4_address2">{location.state.address2}</label><br/>

            <label>City:</label>
            <label id="city">{location.state.city}</label><br/>

            <label>State:</label>
            <label id="state">{location.state.state}</label><br/>

            <label>Zip:</label>
            <label id="zip">{location.state.zip}</label><br/>

            <label>Apointment type:</label>
            <label id="apointment_type">{location.state.appointment}</label><br/>

            <label>Reference number:</label>
            <label id="reference_number">{location.state.reference_number}</label><br/>

            <label>Referring physician:</label>
            <label id="reffering_physician">{location.state.physician}</label><br/>

            <label>Referring clinic:</label>
            <label id="reffering_clinic">{location.state.facility}</label>
            
            <h3>Is this information correct?</h3>
            <br/> <br/>
            
            <nav>
                <Link to="/page3"
                state={{
                        username:location.state.username,
                        password:location.state.password,
                        first_name:location.state.first_name,
                        last_name: location.state.last_name,
                        DOB:location.state.DOB,
                        email: location.state.email,
                        phone: location.state.phone,
                        address1: location.state.address1,
                        address2: location.state.address2,
                        city: location.state.city,
                        state: location.state.state,
                        zip: location.state.zip, 
                        appointment: location.state.appointment,
                        reference_number: location.state.reference_number,
                        physician: location.state.physician,
                        facility: location.state.facility                      
                }}>
                    <input className="button" type="button" value="No, Go Back" />
                </Link>
                <Link to="/page5">
                    <input className="button" type="submit" value="Yes & Submit" />
                </Link>
            </nav>
            </form>
            <progress value={.75}/>
            <footer>
                    <div id="address">MedLab Medical Clinics of America <br/>
                         1074 Jadewood Drive, Suite 330 <br/>
                         Chicago, Illinois 60647 <br/>
                    </div>
                     <div id="contact">
                         Phone: 630-921-0000 <br/>
                         Fax: 773-709-3312
                    </div>
             </footer>
        </div>
    )
}
