import React from 'react';
import {useState} from 'react';
import { Link } from "react-router";
import { useLocation } from 'react-router';
import '../style.css'
export default function Page1() {

    const location = useLocation();
    const [error, setError] = useState('');
    const [inputs, setInputs] = useState({});
    let sendState;
    if(location.state !== null)
    {
        inputs.password = location.state.password;
        location.state.password = '';
        inputs.username = location.state.username;
        location.state.username = '';
        
        sendState = 
        {
            username:inputs.username || "",
            password:inputs.password || "" ,
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
        }  
    }else
    {
        sendState=
        {
            username:inputs.username,
            password:inputs.password 
        }
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

      const handleSubmit = (event) =>
      {
        if (!inputs.username || !inputs.password){
            setError("Please enter a username and password.");
            event.preventDefault();        
        }
        else       
            setError('');  

}
    return(
        <div>
            <header>
                <h1>MedLab Registration Form</h1>
            </header>
            <form>
            <h2>Create account</h2>
            <main>
            <label className="labelpage1">Username</label>
                <input 
                    type="text"
                    name="username"
                    value={inputs.username || ""} 
                    onChange={handleChange}
                />
                <br/><br/>
                <label className="labelpage1">Password</label>
                <input 
                    type="password"
                    name="password"
                    value={inputs.password || ""} 
                    onChange={handleChange}
                />
                 {error && <p style={{ color: 'red', fontSize : '1.5em',fontWeight:'bold'}}>{error}</p>}
            </main>
                <br/><br/>
                
                <nav>
                    <Link to="/page2" onClick={handleSubmit} state={sendState}>
                        <input className="button" type="submit" value="Next"  />
                    </Link>
                </nav>
                <progress value={0} />
            </form>
            <footer style={{position:"fixed"}}>
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

