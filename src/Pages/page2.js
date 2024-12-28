import React from 'react';
import {useState} from 'react';
import { Link } from "react-router";
import { useLocation } from 'react-router';


export default function Page2() {

    const location = useLocation();
    const [error, setError] = useState('');
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      if (location.state.first_name){
        inputs.first_name = location.state.first_name;
        location.state.first_name = '';
      }
      if (location.state.last_name){
        inputs.last_name = location.state.last_name
        location.state.last_name = '';
      }
      if (location.state.DOB){
        inputs.DOB = location.state.DOB
        location.state.DOB = '';
      }
      if (location.state.email){
        inputs.email = location.state.email
        location.state.email = '';
      }
      if (location.state.phone){
        inputs.phone = location.state.phone
        location.state.phone = '';
      }
      if (location.state.address1){
        inputs.address1 = location.state.address1
        location.state.address1 = '';
      }
      if (location.state.address2){
        inputs.address2 = location.state.address2
        location.state.address2 = '';
      }
      if (location.state.city){
        inputs.city = location.state.city
        location.state.city = '';
      }
      if (location.state.state){
        inputs.state = location.state.state
        location.state.state = '';
      }
      if (location.state.zip){
        inputs.zip = location.state.zip 
        location.state.zip = '';
      }
      const handleSubmit = (event) =>
        {
          if(
            !inputs.first_name ||
            !inputs.last_name ||
            !inputs.DOB ||
            !inputs.email ||
            !inputs.phone ||
            !inputs.address1 ||
            !inputs.city ||
            !inputs.state ||
            !inputs.zip) {
              setError("Please fill all input fields");
              event.preventDefault();        
          }
          else       
              setError('');
        }
      const forceNumber = (event) => {
        if(isNaN(event.key) && event.key !== 'Backspace') {
            event.preventDefault();     
      }
    }
    const emailFormat = (event) => {
        var testEmail =    /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
        const email = event.target.value;
            if (email.length>0 && !testEmail.test(email))
            {
                event.target.style.border = '5px solid red';
                setError('Please enter a valid email');
            }
            else
            {
                setError('');
                event.target.style.border = 'none';
            } 

        }
    
    const phoneNumberAutoFormat = (event) => {
        const number = event.target.value;
        if (number.length < 4) 
            event.target.value= number.replace(/[^0-9]/g, "");
        if (number.length < 7) 
            event.target.value= number.replace(/(\d{3})(\d{1})/, "$1-$2");
        if (number.length < 11) 
            event.target.value= number.replace(/(\d{3})(\d{3})(\d{1})/, "$1-$2-$3");
        else 
            event.target.value= number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
      };

    return(
    <div>
            <header><h1>MedLab Registration Form</h1></header>
            <form>
            <h2>Patient information</h2>
                <label >First Name:</label>
                <input  
                    type="text"
                    name="first_name"
                    value={inputs.first_name || ""} 
                    onChange={handleChange}
                />
               
                
                <br/>
                <label >Last Name:</label>
                <input  
                    type="text"
                    name="last_name"
                    value={inputs.last_name || ""}
                    onChange={handleChange}
                />
                <br/>
                <label >Date of birth:</label>
                <input  
                    type="date"
                    name="DOB"
                    
                    onChange={handleChange}
                />
                <br/>
                <label >Email:</label>
                <input  
                    type="email"
                    name="email"
                    value={inputs.email || ""}
                    onChange={(handleChange)}
                    onInput={emailFormat}
                />
                 <br/>
                <label >Phone Number:</label>
                <input 
                    type="tel"
                    name="phone"
                    maxLength="12"
                    value={inputs.phone || ""}
                    onChange={(handleChange)} 
                    onKeyDown={(forceNumber,phoneNumberAutoFormat)}
                />
                <br/>
                <label >Address:</label>
                <input  
                    type="text"
                    name="address1"
                    value={inputs.address1 || ""}
                    onChange={handleChange}
                />
                <label id="address2">Apt:</label>
                <input id="address2"
                    type="text"
                    name="address2" 
                    value={inputs.address2 || ""}
                    onChange={handleChange}
                    />
                 <br/>
                <label >City:</label>
                <input  
                    type="text"
                    name="city" 
                    value={inputs.city || ""}
                    onChange={handleChange}
                />           
                 <br/>
                <label >State:</label>
                <select
                    style={{ width: '250px' }}
                    type="text"
                    name="state" 
                    value={inputs.state || ""}
                    onChange={handleChange}>
                    <option value="" selected disabled hidden>Select state</option>
	                <option value="AL">Alabama</option>
	                <option value="AK">Alaska</option>
                	<option value="AZ">Arizona</option>
                	<option value="AR">Arkansas</option>
                	<option value="CA">California</option>
                	<option value="CO">Colorado</option>
                	<option value="CT">Connecticut</option>
                	<option value="DE">Delaware</option>
                	<option value="DC">District Of Columbia</option>
	                <option value="FL">Florida</option>
                	<option value="GA">Georgia</option>
                	<option value="HI">Hawaii</option>
                	<option value="ID">Idaho</option>
                	<option value="IL">Illinois</option>
                	<option value="IN">Indiana</option>
                	<option value="IA">Iowa</option>
                	<option value="KS">Kansas</option>
                	<option value="KY">Kentucky</option>
                	<option value="LA">Louisiana</option>
                	<option value="ME">Maine</option>
                	<option value="MD">Maryland</option>
                	<option value="MA">Massachusetts</option>
                	<option value="MI">Michigan</option>
                	<option value="MN">Minnesota</option>
                	<option value="MS">Mississippi</option>
                	<option value="MO">Missouri</option>
	                <option value="MT">Montana</option>
                	<option value="NE">Nebraska</option>
	                <option value="NV">Nevada</option>
	                <option value="NH">New Hampshire</option>
	                <option value="NJ">New Jersey</option>
                	<option value="NM">New Mexico</option>
	                <option value="NY">New York</option>
	                <option value="NC">North Carolina</option>
	                <option value="ND">North Dakota</option>
		            <option value="OH">Ohio</option>
	            	<option value="OK">Oklahoma</option>
	            	<option value="OR">Oregon</option>
	            	<option value="PA">Pennsylvania</option>
		            <option value="RI">Rhode Island</option>
		            <option value="SC">South Carolina</option>
		            <option value="SD">South Dakota</option>
		            <option value="TN">Tennessee</option>
			        <option value="TX">Texas</option>
			        <option value="UT">Utah</option>
			        <option value="VT">Vermont</option>
			        <option value="VA">Virginia</option>
			        <option value="WA">Washington</option>
			        <option value="WV">West Virginia</option>
			        <option value="WI">Wisconsin</option>
			        <option value="WY">Wyoming</option>
		        </select> 
                <br/>
                <label>Zip code:</label>
                <input  
                    type="text"
                    name="zip" 
                    value={inputs.zip || ""}
                    onChange={handleChange}
                    onKeyDown={forceNumber}
                    maxLength={5}
                />
                <br/> <br/>
                {error && <p style={{ color: 'red', fontSize : '1.5em',fontWeight:'bold'}}>{error}</p>}
                
                <nav>
                    <Link to='/page1' state={{
                            username:location.state.username,
                            password:location.state.password,
                            first_name: inputs.first_name,
                            last_name: inputs.last_name,
                            DOB: inputs.DOB,
                            email: inputs.email,
                            phone: inputs.phone,
                            address1: inputs.address1,
                            address2: inputs.address2,
                            city: inputs.city,
                            state: inputs.state,
                            zip: inputs.zip,
                            appointment: location.state.appointment,
                            reference_number: location.state.reference_number,
                            physician: location.state.physician,
                            facility: location.state.facility 
                          }}>
                        <input className="button"  type="button" value="Go Back" />
                    </Link>
                    <Link to='/page3' onClick={handleSubmit}
                          state={{
                            username:location.state.username,
                            password:location.state.password,
                            first_name: inputs.first_name,
                            last_name: inputs.last_name,
                            DOB: inputs.DOB,
                            email: inputs.email,
                            phone: inputs.phone,
                            address1: inputs.address1,
                            address2: inputs.address2,
                            city: inputs.city,
                            state: inputs.state,
                            zip: inputs.zip,
                            appointment: location.state.appointment,
                            reference_number: location.state.reference_number,
                            physician: location.state.physician,
                            facility: location.state.facility 
                          }}
                    >
                        <input className="button" type="button" value="Next" />
                    </Link>
                </nav>
            </form>
            <progress value={.25}/>
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
