import React, { useEffect } from "react";

export default function Events() {
  useEffect(() => {
    document.title = "Events — Dillon Campaign";
  }, []);

  // sample static events (replace with dynamic source later)
  const events = [
    { id: 1, date: "Nov 10, 2025", title: "Town Hall in Midtown", location: "Community Center" },
    { id: 2, date: "Nov 15, 2025", title: "Door-knocking Training", location: "Campaign HQ" },
  ];

  return (
    <section className="events-section">
        <h1><div></div>Events</h1>
        <h1>COMING SOON</h1>
        
        {/* <div className="events-list">
          <div className="events-list-inner">
            <p>
              Join John Dillon and our team at upcoming rallies, 
              community drives, and town hall meetings near you. 
              Your presence makes a difference.
            </p>
            <div className="event-card">
              <h3>Community Town Hall</h3>
              <p>📍 Downtown Civic Center</p>
              <p>🗓️ November 10, 2025 — 4:00 PM</p>
              <button>RSVP</button>
            </div>

            <div className="event-card">
              <h3>Volunteer Meetup</h3>
              <p>📍 Green Park Pavilion</p>
              <p>🗓️ November 15, 2025 — 2:00 PM</p>
              <button>RSVP</button>
            </div>

            <div className="event-card">
              <h3>Rally for Progress</h3>
              <p>📍 Central Square</p>
              <p>🗓️ November 22, 2025 — 10:00 AM</p>
              <button>Join Us</button>
            </div>

            <div className="events-cta">
              <h2>Can’t make it to an event?</h2>
              <p>You can still support the campaign by volunteering or donating online.</p>
              <button>Get Involved</button>
            </div>
          </div> 
        </div> */}
        
    </section>
  );
}