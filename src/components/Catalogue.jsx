import "./catalogue.css";

const banners = [
  { title: "Premium Offering", text: "Describe your flagship package. Edit anytime." },
  { title: "Starter Bundle", text: "Entry option to get started quickly." },
  { title: "Enterprise Suite", text: "Scale-ready offering for growing teams." },
  { title: "Growth Toolkit", text: "Templates, playbooks, and checklists." },
  { title: "Brand Assets", text: "Logos, guidelines, media kits." },
  { title: "Partner Integrations", text: "Plug into tools your team already uses." },
  { title: "Launch Campaign", text: "Pre-built campaigns to go live fast." },
  { title: "Support & Success", text: "Priority assistance and onboarding." },
  { title: "Training & Workshops", text: "Upskill your team with expert sessions." },
  { title: "Custom Solutions", text: "Tailored builds for specific needs." },
];

export default function Catalogue() {
  // Duplicate list for seamless looping
  const loopItems = [...banners, ...banners];

  return (
    <section className="catalogue-section" id="catalogue">
      <div className="catalogue-container">
        <h2 className="catalogue-title">Catalogue</h2>

        <div className="catalogue-ticker" aria-label="Scrolling catalogue banners">
          <div className="catalogue-track">
            {loopItems.map((b, i) => (
              <a
                className={`catalogue-banner ${['banner-a','banner-b','banner-c'][i % 3]}`}
                key={i}
                href="#"
                aria-label={`Open ${b.title}`}
              >
                <div className="banner-content">
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                  <span className="banner-cta">Learn More</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* tip: adjust speed by changing --ticker-speed in CSS */}
      </div>
    </section>
  );
}
