import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Dillon Campaign";
  }, []);

  return (
    <>
      <section className="hero home-hero" id="home-hero">
        <div className="hero-inner">
          <div className="hero-image"></div>
          <div className="hero-form">
            <h1>Every County, Every Vote</h1>
            <p>
              <span>Sign up <div></div></span>
              Help elect John Dillon for U.S. House Representative
            </p>
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
          </div>
        </div>
      </section>


      <section className="about-john">
        <div className="about-john-text">
          <h1><div></div>A different kind of Democrat.</h1>
          <p>
            John doesn’t look like a typical politician, 
            and more importantly, he doesn’t act like one. 
            He supported legalizing marijuana before it was popular, 
            officiated a same-sex marriage before it was legal, and pushed 
            for single payer healthcare long before it was mainstream. 
            The issues John is running on now are the same issues he’s 
            been working on for the last two decades.
          </p>
          <a href="">Read John's Story</a>
        </div>
        <div className="about-john-image"></div>
      </section>
      


      <section className="get-involved">
        <h1>
          Get Involved. <br />
          Take Action.
        </h1>
        <div className="get-involved-cards">
          <div>
              <h3>Volunteer</h3>
              <button>Sign Up</button>
          </div>
          <div>
              <h3>Register to Vote</h3>
              <button>Voting Information</button>
          </div>
          <div>
              <h3>Vote by Mail</h3>
              <button>Register Here</button>
          </div>
        </div>
        <div className="text-to-join">
          <h2>Text <span>JOIN</span> to <span>30200</span></h2>
          <p>
            By participating with your mobile number, 
            you agree to terms & privacy policy and consent to 
            receive messages to support John Fetterman 
            (messages include donation links). Message & data 
            rates may apply. Message frequency varies. Text 
            HELP for help, Text STOP to Opt Out.
          </p>
        </div>
      </section>


      <section className="about-john about-john-family">
        <div className="about-john-image john-family-image"></div>
        <div className="about-john-text">
          <h1><div></div>What John stands for</h1>
          <p>
            You'll always know exactly where I stand. 
            I haven't had to 'evolve' on the issues, 
            because I've always said what I believe is 
            true and I've been championing the same core 
            principles for the last 20 years.
          </p>
          <a href="">John on the Issues</a>
        </div>
      </section>



      <section className="the-news">
        <h3><div></div>In the News</h3>
        <div className="news-cards">
          <div>
            <h4>
              “Fetterman doesn't sound like a typical Democrat,
              and he doesn't look like one either.”
            </h4>
            <p>ROLLING STONE</p>
          </div>

          <div>
            <h4>
              “Pennsylvania's anger translator, 
              and Donald Trump's worst nightmare”
            </h4>
            <p>THE INDEPENDENT</p>
          </div>

          <div>
            <h4>
             “this tough-guy, give-it-to-you-straight vibe 
             sets Fetterman apart from most politicians”
            </h4>
            <p>SLATE</p>
          </div>
        </div>
        <a href="">More In the News</a>


        <div className="family-dogs"></div>
      </section>
    </>
  );
}
