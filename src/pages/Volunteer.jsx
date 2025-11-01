import React, { useEffect } from "react";

export default function Volunteer() {
  useEffect(() => {
    document.title = "Volunteer — Dillon Campaign";
  }, []);

  return (
    <section className="section volunteer-section">
      <h1><div></div>Volunteer</h1>
      
      <div className="volunteer-form-container">
        <form className="volunteer-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Help us reach every county, every voter</h3>
          <div className="volunter-inputs">
            <input name="name" type="text" required placeholder="First name" id="first-name"/>

            <input name="name" type="text" required placeholder="Last name" id="last-name"/>

            <input name="email" type="email" required placeholder="Email address" id="email-address"/>

            <input name="zip" type="text" required placeholder="Zip code" id="zip-code"/>

            <input name="number" type="text" required placeholder="Mobile number" id="mobile-number"/>
          </div>
          
          <p>
            Enter your phone number above to join our team. By 
            providing your mobile number, you agree to terms & 
            privacy policy and consent to receive messages to 
            support John Fetterman (messages include donation links). 
            Message & data rates may apply.  Message frequency varies. 
            Text HELP for help, Text STOP to Opt Out.  
          </p>
          <h4>
            Keep me in the loop — sign me up for occasional, important 
            mobile action alerts from Team Fetterman.
          </h4>
          <button type="submit" className="btn-primary">Yes, sign me up!</button>

          <h4>How would you like to get involved?</h4>
          <div>
            <button>Make calls</button>
            <button>Send texts</button>
            <button>Knock on doors</button>
            <button>Socially distant door knocking</button>
            <button>Host a house party</button>
            <button>Host a Zoom fundraiser</button>
            <button>Grassroots fundraising</button>
          </div>
          <button id="volunteer-form-button">I'm in</button>
        </form>
      </div>
    </section>
  );
}