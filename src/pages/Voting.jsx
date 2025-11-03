import React, { useEffect } from "react";

export default function Voting() {
  useEffect(() => {
    document.title = "Voting — Dillon Campaign";
  }, []);

  return (
    <section className="section voting-section">
      <h1><div></div>Voting</h1>

      <div className="voting-section-inner">
        <div className="voting-details">
          <div  className="voting-details-1">
            <h2>
                The General Election for U.S. United States House of Representatives in Pennsylvania 
                is on Tuesday, 3 November 2026.
            </h2> 
            <h2>Find your polling place + make a plan to vote ASAP.</h2> 
          </div>

          <div className="voting-details-2">
            <button>Find your Polling Place</button>
            <button>Return Mail-In or Absentee Ballot</button>
            <button>Election Day Information</button>
            <button>Military and Overseas Voting</button>
            <button>Check Voter Registration</button>
            <button>Register to Vote</button>
            <button>Apply for Mail-In Ballot</button>
          </div>

          <div className="voting-details-3">
            <img src="/polling_place.gif" alt="" />
            <p>D’oh! Don’t forget to make a plan to vote.</p>
            <p>
              <span>*Note:</span> The last day to register to vote in the Tuesday, 
              November 3 election is October 24, 2026.
            </p>
          </div>


          <div className="voting-details-4">
            <h2>URGENT: Return Absentee + Mail-In Ballots</h2>
            <p>The deadline to apply for a Mail-in Ballot is November 1, 2026.</p>
            <div>
              <p>
                <span>Step 1:</span> Read the instructions carefully and mark your 
                Ballot. Be sure to complete the front and back of each page.
              </p>

              <p>
                <span>Step 2:</span> Seal your Ballot in the inner secrecy envelope that 
                indicates “Official Election Ballot.” Do not make any marks on the 
                inner secrecy envelope. Your Ballot must be enclosed and sealed in 
                the inner secrecy envelope that indicates “Official Election Ballot” or 
                it will not be counted.
              </p>

              <p>
                <span>Step 3:</span> Seal the inner secrecy envelope in the pre-addressed 
                outer return envelope. Complete, sign and date the voter’s declaration 
                on the outside of the outer return envelope. If you do not sign and date
                  below the declaration on the return envelope your Ballot will not be counted.
              </p>

              <p>
                <span>Step 4:</span> Return your voted Ballot to the county election board. 
                Absentee and Mail-in Ballots must be received by 8:00 PM ET on Election Day 
                at your County Election Office. To ensure your Ballot is received by the deadline, 
                return it as soon as possible.
              </p>

              <p>
                <span>Mail Your Ballot</span> using the return envelope supplied with 
                your Ballot, make sure you use the proper postage (if needed) and 
                that it arrives at your County Election Office by 8:00 PM on Election Day. 
                Postmarks do not count. If your Ballot is not received by the county election 
                board by 8:00 PM ET on Election Day, it will not be counted.
              </p>
            </div>

            <p>
              Or, you can <span>Hand Deliver Your Ballot</span> before 8:00 PM ET on Election Day to your 
              <span className="speacial-span"> County Election Office</span> or <span className="speacial-span">
                other officially designated site</span>. Additionally, some 
              counties are providing <span>drop-boxes</span> for Mail-In Ballots.
            </p>

            <button>More Information</button>
          </div>



          <div className="voting-details-5">
            <h2>In Person Voting on Tuesday, November 8</h2>
            <p>
              You can vote anytime on Election Day from 7:00 
              AM ET – 8:00 PM ET. In addition, any Mail-In Ballots 
              must be physically received in the County Election 
              Office by 8:00 PM ET. Postmarked by 8:00 PM ET does not count.
            </p>
            <p>
              The Pennsylvania Board of Elections has a special tool so 
              Pennsylvanians can find their poll site for Election Day.
            </p>
            <button>Find Your Polling Place</button>
          </div>



          <div className="voting-details-6">
            <h2>Voter Registration</h2>
            <p>
              In order to vote for John Fetterman in the November 8 
              General Election, you MUST have registered to vote by October 24, 2022.
            </p>
            <p>
              Unsure of your voter registration, or simply need to register to vote 
              in the first place? You can confirm your voter information below 
              (hey, it never hurts to check)!
            </p>
            <button>Check Voter Registration Status</button>
          </div>
        </div>
      </div>
    </section>
  );
}
