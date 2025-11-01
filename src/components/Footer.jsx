import React from "react";

export default function Footer() {
    return(
        <>
            <section className="join-campaign">
        <div className="join-campaign-text">
          <h1>Join Our Campaign</h1>
          <p>
            We’re building a grassroots campaign to 
            fight for every vote in every one of 
            Pennsylvania’s 67 counties.
          </p>
        </div>
        
        <div className="input-container">
          <input type="email" name="email" id="email" placeholder="Email address" required/>
          <input type="text" name="zip code" id="zip-code" placeholder="Zip code" required/>
          <input type="text" name="mobile-number" id="mobile-number" placeholder="Mobile number" required/>
          <p>
            Enter your phone number above to join our team. By providing 
            your mobile number, you agree to terms & privacy policy and 
            consent to receive messages to support John Dillon 
            (messages include donation links). Message & data rates may apply.  
            Message frequency varies. Text HELP for help, Text STOP to Opt Out.  
          </p>
          <button>Join Our Team</button>
        </div>

        <div className="donation-banner chip-in">
          <div className="donation-inner chip-in-inner">
            <div className="donation-text">
                <strong className="donation-title">Chip In</strong>
                <div className="donation-sub">Every donation helps get us closer to sending John to the U.S. House Representative.</div>
            </div>

            <div className="donation-actions">
              <div className="donation-buttons">
                <button>$10</button>
                <button>$25</button>
                <button>$50</button>
                <button>$100</button>
                <button>$250</button>
                <button>Other amount</button>
              </div>
              <p>Every donation helps get us closer to sending John to the U.S. Senate.</p>
            </div>
          </div>
        </div>
      </section>




            <section className="footer">
                <div className="nav-bar footer-nav-bar">
                    <h1>JOHN DILLON</h1>
                    <ul>
                       <li><a href="">Meet the Fettermans</a></li>
                       <li><a href="">Home</a></li>
                       <li><a href="">Dillons</a></li>
                       <li><a href="">Volunteer</a></li>
                       <li><a href="">Events</a></li>
                       <li><a href="">Voting</a></li>
                       <li><a href="" id="nav-donate-link">Donate</a></li>
                    </ul>
                </div>

                <div className="donate-socials">
                    <div className="footer-donate-by-mail">
                        <h4>DONATE BY MAIL</h4>
                        <p>
                            Fetterman for PA <br />
                            P.O Box 6061 <br />
                            Pittsburgh, PA 15211
                        </p>
                    </div>
                    <h5>FOLLOW US ON SOCIAL MEDIA</h5>
                </div>

                <div className="footer-last-div">
                    <h5>PAID FOR BY DILLON FOR PA</h5>
                    <ul>
                        <li>Jobs</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Accessibility Statement</li>
                    </ul>
                </div>
            </section>
        </>
    )
}