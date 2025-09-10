// src/components/Membership.jsx
import React from "react";
import "./membership.css";

export default function Membership() {
  return (
    <section className="member-section" id="membership">
      <div className="member-container">
        <h2 className="member-title">WHY JOIN XCEED </h2>

        <div className="member-grid">
          {/* Card 1 */}
          <a className="member-card" href="#xceed-network" aria-label="XceedNetwork">
            <div className="member-card-body">
              <h3 className="member-card-title">Our Programs </h3>
              <p className="member-card-text">
               At Xceed, we’ve designed programs that empower entrepreneurs, professionals, and businesses at every stage of their journey. Each initiative is built to provide opportunities, visibility, and growth in a trusted community.
              </p>
              <span className="member-cta">Explore →</span>
            </div>
          </a>

          {/* Card 2 */}
          <a className="member-card" href="#achievements" aria-label="Our Achievements">
            <div className="member-card-body">
              <h3 className="member-card-title">Our Services</h3>
              <p className="member-card-text">
                 Our services are designed to empower entrepreneurs and professionals with the right tools, support, and opportunities to grow their business, enhance visibility, and build lasting connections. 
              </p>
              <span className="member-cta">View Highlights →</span>
            </div>
          </a>

          {/* Card 3 */}
          <a className="member-card" href="#benefits" aria-label="Benefits of joining XceedNetworks">
            <div className="member-card-body">
              <h3 className="member-card-title">Our Benefits</h3>
              <p className="member-card-text">
               From networking and mentorship to visibility and business opportunities, Xceed offers a range of advantages that make your membership truly valuable.
              </p>
              <span className="member-cta">See Benefits →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
