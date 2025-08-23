import "./services.css";

const services = [
  { title: "Strategy & Consulting", text: "Roadmaps, positioning, and go-to-market." },
  { title: "Creative & Content", text: "Design, copy, and brand storytelling." },
  { title: "Performance & Analytics", text: "Data-driven campaigns & optimization." },
  { title: "SEO & Organic Growth", text: "Visibility, authority, and inbound." },
  { title: "Paid Media", text: "Cross-channel ads that scale profitably." },
  { title: "Email & CRM", text: "Lifecycle flows and retention." },
  { title: "Web & Landing Pages", text: "High-converting experiences." },
  { title: "Community & Advocacy", text: "UGC, referrals, word-of-mouth." },
  { title: "Partnerships", text: "Co-marketing and integrations." },
  { title: "Training & Workshops", text: "Upskill your internal team." },
];

export default function Services() {
  // duplicate list for seamless looping
  const loop = [...services, ...services];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">Services</h2>

        <div className="services-ticker" aria-label="Scrolling services banners">
          <div className="services-track">
            {loop.map((s, i) => (
              <a
                key={i}
                href="#"
                className={`services-banner ${["srv-a", "srv-b", "srv-c"][i % 3]}`}
                aria-label={`Open ${s.title}`}
              >
                <div className="srv-content">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="srv-cta">Read More</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Tip: tweak speed in CSS via --services-speed */}
      </div>
    </section>
  );
}
