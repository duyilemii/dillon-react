import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Dillon Campaign";
  }, []);

  return (
    <section className="section">
      <div className="card">
        <h2>404 — Page Not Found</h2>
        <p>Sorry, that page doesn't exist. <Link to="/">Go home</Link></p>
      </div>
    </section>
  );
}
