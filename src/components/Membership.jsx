// src/components/Membership.jsx
import React from "react";
import "./membership.css";

export default function Membership() {
  return (
    <section className="member-section" id="membership">
      <div className="member-container">
        <h2 className="member-title">EXPLORE OUR MEMBERSHIP</h2>

        <div className="member-grid">
          {/* Card 1 */}
          <a className="member-card" href="#xceed-network" aria-label="XceedNetwork">
            <div className="member-card-body">
              <h3 className="member-card-title">XceedNetwork</h3>
              <p className="member-card-text">
                A thriving community where founders, leaders, and professionals
                connect for peer learning, mentorship.
              </p>
              <span className="member-cta">Explore →</span>
            </div>
          </a>

          {/* Card 2 */}
          <a className="member-card" href="#achievements" aria-label="Our Achievements">
            <div className="member-card-body">
              <h3 className="member-card-title">Our Achievements</h3>
              <p className="member-card-text">
                Celebrating milestones made possible by our members: 250+ collaborations,
                90% satisfaction, 30+ funded initiatives.
              </p>
              <span className="member-cta">View Highlights →</span>
            </div>
          </a>

          {/* Card 3 */}
          <a className="member-card" href="#benefits" aria-label="Benefits of joining XceedNetworks">
            <div className="member-card-body">
              <h3 className="member-card-title">Benefits of joining XceedNetworks</h3>
              <p className="member-card-text">
                Unlock warm intros, playbooks, tools, visibility, and brand lift — compounding
                value from day one.
              </p>
              <span className="member-cta">See Benefits →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
