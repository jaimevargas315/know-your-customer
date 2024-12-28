import React from 'react';
import check from '../check.gif';
import '../style.css'
export default function Page1() {

    console.log(check);
    return(
        <div>
            <header>
                <h1>MedLab Registration Form</h1>
            </header>
            <form>
            <h2>Form submitted</h2>
            <main>
                <img src={check} alt="checkmark" width={250} ></img>
            </main>
            
            <text id="flavor">You may close this page</text><br/>
            
            </form>
            <progress value={1}/>
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

