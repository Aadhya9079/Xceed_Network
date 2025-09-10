import { useEffect, useRef } from "react";
import "./connect.css";

import imgConnect from "../assets/connect.jpg"; // use JPG here
import imgLearn from "../assets/learn.jpg";
import imgGrow from "../assets/grow.jpg"
import collaborate from "../assets/collaborate.jpg";

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
  <h2 class="connect-title">
  <span class="blue">Connect</span> <span class="gold">|</span>
  <span class="blue">Learn</span> <span class="gold">|</span>  <span class="blue">Collaborate</span> <span class="gold">|</span>
  <span class="blue">Grow</span>
</h2>
  <p className="connect-sub">
   At Xceed Network, we believe success is not a solo journey—it’s a collective effort. Our platform is built to empower entrepreneurs and professionals at every stage of their business journey. From forging powerful connections, gaining actionable knowledge, and scaling your ventures, to building partnerships that open new doors—Xceed is where your growth story truly begins.
  </p>
</div>


      <div className="connect-grid">
        {/* Card 1 */}
        <article className="connect-card">
          <img src={imgConnect} alt="Connect" className="connect-card-img-top" />
          <div className="connect-card-body">
            <h3 className="connect-card-title">Connect</h3>
            <p className="connect-card-text">
              Opportunities begin with the right people. Xceed connects entrepreneurs, startups, corporate leaders, freelancers, and investors in a vibrant ecosystem designed to spark conversations, referrals, and collaborations. With access to diverse industries and regions, you’ll never network alone—you’ll always connect with purpose.
            </p>
          </div>
        </article>

        {/* Card 2 */}
        <article className="connect-card">
          <img src={imgLearn} alt="Learn" className="connect-card-img-top" />
          <div className="connect-card-body">
            <h3 className="connect-card-title">Learn</h3>
            <p className="connect-card-text">
              Knowledge fuels innovation. At Xceed, members get access to expert-led workshops, peer-to-peer learning, mentorship programs, and real-world case studies. We ensure you gain not just theoretical insights but practical strategies you can immediately apply to accelerate your growth.
            </p>
          </div>
        </article>

  <article className="connect-card">
          <img src={collaborate } alt="collaborate " className="connect-card-img-top" />
          <div className="connect-card-body">
            <h3 className="connect-card-title">Collaborate</h3>
            <p className="connect-card-text">
            Collaboration is the key to sustainable success. Xceed fosters meaningful partnerships, joint ventures, and cross-industry alliances, helping members create new opportunities that would be impossible to achieve alone. Together, we turn collective strengths into impactful results.
            </p>
          </div>
        </article>

        {/* Card 3 */}
        <article className="connect-card">
          <img src={imgGrow} alt="Grow" className="connect-card-img-top" />
          <div className="connect-card-body">
            <h3 className="connect-card-title">Grow</h3>
            <p className="connect-card-text">
             Scaling a business requires the right support system. Xceed provides resources, digital tools, and community-driven programs to help you expand smarter and faster. Whether you’re growing locally or aiming for national recognition, our network ensures you have the guidance and visibility to thrive.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
