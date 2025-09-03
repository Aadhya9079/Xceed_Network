import { useEffect, useRef, useState } from "react";
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
  const loopItems = [...banners, ...banners]; // duplicate for infinite scroll
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const lastOffset = useRef(0);

  // Auto-scroll
  useEffect(() => {
    let animationId;
    const speed = 0.5; // lower = slower

    const animate = () => {
      if (!isDragging) {
        setOffset((prev) => (prev - speed) % (trackRef.current.scrollWidth / 2));
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  // Apply transform
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [offset]);

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
    lastOffset.current = offset;
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStart.current;
    setOffset(lastOffset.current + delta);
  };
  const handleMouseUp = () => setIsDragging(false);

  // Touch handlers (mobile swipe)
  const handleTouchStart = (e) => {
    setIsDragging(true);
    dragStart.current = e.touches[0].clientX;
    lastOffset.current = offset;
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - dragStart.current;
    setOffset(lastOffset.current + delta);
  };
  const handleTouchEnd = () => setIsDragging(false);

  return (
    <section className="catalogue-section" id="catalogue">
      <div className="catalogue-container">
        <h2 className="catalogue-title">CATALOGUE</h2>

        <div
          className="catalogue-ticker"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="catalogue-track" ref={trackRef}>
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
                  <span className="catalogue-cta">Learn More</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
