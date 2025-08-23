import { useEffect, useRef } from "react";
import "./connect.css";

import imgConnect from "../assets/connect.jpg"; // use JPG here
import imgLearn from "../assets/learn.jpg";
import imgGrow from "../assets/grow.jpg";

export default function Connect() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const cards = root.querySelectorAll(".connect-card");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="connect-section" id="connect" ref={containerRef}>
      <div className="connect-header">
  <h2 className="connect-title">Connect | Learn | Grow</h2>
  <p className="connect-sub">
    Build real relationships, gain practical knowledge, and scale with a
    community designed for ambitious founders and professionals.
  </p>
</div>


      <div className="connect-grid">
        {/* Card 1 */}
        <article className="connect-card">
          <img src={imgConnect} alt="Connect" className="connect-card-img-top" />
          <div className="connect-card-body">
            <h3 className="connect-card-title">Connect</h3>
            <p className="connect-card-text">
              At Xceed Network, we believe that powerful connections spark
              powerful opportunities. We bring together entrepreneurs, startups,
              freelancers, and professionals to build a vibrant ecosystem where
              collaboration fuels innovation.
            </p>
          </div>
        </article>

        {/* Card 2 */}
        <article className="connect-card">
          <img src={imgLearn} alt="Learn" className="connect-card-img-top" />
          <div className="connect-card-body">
            <h3 className="connect-card-title">Learn</h3>
            <p className="connect-card-text">
              Growth begins with knowledge. Through expert-led sessions, peer
              learning, and real-world insights, we help you gain the skills and
              strategies needed to scale your business with confidence and
              clarity.
            </p>
          </div>
        </article>

        {/* Card 3 */}
        <article className="connect-card">
          <img src={imgGrow} alt="Grow" className="connect-card-img-top" />
          <div className="connect-card-body">
            <h3 className="connect-card-title">Grow</h3>
            <p className="connect-card-text">
              Whether you’re launching your first venture or scaling your fifth,
              Xceed Network provides the tools, support, and community to help
              you grow smarter, faster, and stronger—together.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
