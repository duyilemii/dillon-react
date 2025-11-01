import React from "react";

export default function DonationBanner() { 
  return (
    <div
      className="donation-banner"
    >
        <div className="donation-inner">
            <div className="donation-text">
                <strong className="donation-title">Support John Dillon for U.S. House Representative</strong>
                <div className="donation-sub">Pennsylvania is a key swing state in our fight for the U.S. Senate.</div>
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
  );
}
