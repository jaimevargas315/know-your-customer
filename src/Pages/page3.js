import React from 'react';
import {useState} from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Page3() {
    const [error, setError] = useState('');
    const location = useLocation();
    const [inputs, setInputs] = useState({});
        if(location.state.appointment)
          {
          inputs.appointment = location.state.appointment;
          location.state.appointment = '';
          }
        if(location.state.reference_number)
          {
          inputs.reference_number = location.state.reference_number;
          location.state.reference_number = '';
          }
        if(location.state.physician)
          {
          inputs.physician = location.state.physician;
          location.state.physician = '';
          }
        if(location.state.facility)
        {
          inputs.facility = location.state.facility;
          location.state.facility = '';  
        } 
        
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      
      
      const handleSubmit = (event) =>
        {
          if(
                !inputs.appointment ||
                !inputs.physician ||
                !inputs.facility
            )
             {
              setError("Please fill all input fields");
              event.preventDefault();        
          }
          if(selectedOption === 'yes' && !inputs.reference_number)
             {
              setError("Please fill the reference number field");
              event.preventDefault();        
          }
        }

      const [selectedOption, setSelectedOption] = useState('no');
      const handleOptionChange = (event) => {
         setSelectedOption(event.target.value);
      }

    return (
        <div>    
            <header><h1>MedLab Registration Form</h1></header>
            <form>
            <h2>Create Appointment</h2>
            <label className="page3" htmlFor="cars">Appointment type:</label>
                <select 
                    name="appointment" 
                    onChange={handleChange}
                    value={inputs.appointment}>
                        <option value="" selected disabled hidden>Choose here</option>
                        <option value="Drug test">Drug test</option>
                        <option value="DOT examination">DOT examination</option>
                        <option value="Lab Scan">Lab scan (x-ray, MRI, CT, Ultrasound)</option>
                        <option value="Blood work">Blood work</option>
                </select> 
                <br/><br/>
                <label className="page3">Do you have a reference number?</label>
                <input type="radio"
                       name="reference" 
                       id="no"
                       value="yes"
                       checked={selectedOption=== 'yes'}
                       onChange={handleOptionChange}></input>
                <label className="page3" htmlFor="yes">Yes</label>
                <input type="radio"
                       name="reference"  
                       id="no"
                       value="no"
                       checked={selectedOption=== 'no'}
                       onChange={handleOptionChange}></input>
                <label className="page3" htmlFor="no">No</label><br/><br/>

                {selectedOption==='yes'&&
                <div>
                    <label className="page3">Reference number:</label>
                    <input 
                        type="text" 
                        name="reference_number"
                        value={inputs.reference_number}
                        onChange={handleChange}
                        /> <br/><br/>
                </div>
                }

                <label className="page3">Referring physician:</label>
                <input 
                    type="text" 
                    name="physician"
                    value={inputs.physician}
                    onChange={handleChange}
                    /> <br/><br/>
                <label className="page3">Referring Clinic or Hospital:</label>
                <select 
                    name="facility"
                    value={inputs.facility}
                    onChange={handleChange}
                >
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="Advent">Advent</option>
                    <option value="Amity Clinic">Amity Clinic</option>
                    <option value="Stillwater Clinic">Stillwater Clinic</option>
                    <option value="Healthstone Hospital">Healthstone Hospital</option>
                    <option value="Goldriver Medical Center">Goldriver Medical Center</option>
                </select> <br/><br/>
                
                {error && <p style={{ color: 'red', fontSize : '1.5em',fontWeight:'bold'}}>{error}</p>}
                <nav>
                    <Link to="/page2"
                        state={{
                            username:location.state.username,
                            password:location.state.password,
                            first_name:location.state.first_name,
                            last_name: location.state.last_name,
                            DOB: location.state.DOB,
                            email: location.state.email,
                            phone: location.state.phone,
                            address1: location.state.address1,
                            address2: location.state.address2,
                            city: location.state.city,
                            state: location.state.state,
                            zip: location.state.zip,
                            appointment: inputs.appointment,
                            reference_number: inputs.reference_number,
                            physician: inputs.physician,
                            facility: inputs.facility
                        }}>
                        <input className="button" type="button" value="Go Back" />
                    </Link>
                    <Link 
                    to='/page4'
                    onClick={handleSubmit}
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
                        appointment: inputs.appointment,
                        reference_number: inputs.reference_number,
                        physician: inputs.physician,
                        facility: inputs.facility                     
                    }}
                    >
                        <input className="button"type="button" value="Next" />
                    </Link>
                </nav>
            </form>
            <progress value={.5}/>
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
