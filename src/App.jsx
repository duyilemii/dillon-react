import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DonationBanner from "./components/DonationBanner";
import Footer from "./components/Footer";

/* lazy pages */
const Home = lazy(() => import("./pages/Home"));
const Dillons = lazy(() => import("./pages/Dillons"));
const Volunteer = lazy(() => import("./pages/Volunteer"));
const Events = lazy(() => import("./pages/Events"));
const Voting = lazy(() => import("./pages/Voting"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const [showBanner, setShowBanner] = useState(false);
  const heroRef = useRef(null);

  // Observe the hero marker: show banner once hero is out of view.
  useEffect(() => {
    const marker = heroRef.current;
    if (!marker) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // when hero marker is NOT intersecting -> show banner
          setShowBanner(!entry.isIntersecting);
        });
      },
      { root: null, threshold: 0.05 }
    );

    io.observe(marker);
    return () => io.disconnect();
  }, []);

  return (
    <div className="app-root">
      {/* Donation banner sits in flow (sticky) and is toggled by showBanner */}
      <DonationBanner show={showBanner} />

      {/* Nav sits below the banner visually when banner is visible */}
      <NavBar />

      {/* main content has higher z-index so it scrolls OVER the banner */}
      <main className="main-content">
        {/* marker observed by IntersectionObserver — placed near top of document flow */}
        <div id="hero-marker" ref={heroRef} style={{ height: 1 }} />

        <Suspense fallback={<div className="loading">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dillons" element={<Dillons />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/events" element={<Events />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
