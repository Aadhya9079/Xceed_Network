import { useEffect, useRef, useState } from "react"
import "./catalogue.css"
import Minatologo from "../assets/minatologo.png"
import nayatilogo from "../assets/nayatiLogo1.png"
import nayati from "../assets/nayati.jpeg"
import nayati1 from "../assets/nayati1.jpeg"
import minato from "../assets/minato.jpeg"
import minato1 from "../assets/minato1.jpg"
import minato2 from "../assets/minato.jpg"
import nayati2 from "../assets/nayati2.jpg"

const BUSINESSES = [
  {
    logo: Minatologo,
    name: "Minato Groups",
    badges: ["Super", "5yrs", "Verified"],
    type: "Agent, Online Sales",
    location: "China",
    employees: "600",
    images: [
      minato,
      minato1,
      minato2
    ]
  },
  {
    logo: nayatilogo,
    name: "Nayati International",
    badges: ["Premier", "18yrs", "Verified"],
    type: "Exporter, Manufacturer",
    location: "China",
    employees: "450",
    images: [
      nayati,
      nayati1,
      nayati2
    ]
  },
    {
    logo: Minatologo,
    name: "Minato Groups",
    badges: ["Super", "5yrs", "Verified"],
    type: "Agent, Online Sales",
    location: "China",
    employees: "600",
    images: [
      minato,
      minato1,
      minato2
    ]
  },
  {
    logo: nayatilogo,
    name: "Nayati International",
    badges: ["Premier", "18yrs", "Verified"],
    type: "Exporter, Manufacturer",
    location: "China",
    employees: "450",
    images: [
      nayati,
      nayati1,
      nayati2
    ]
  },
]

export default function Catalogue() {
  const trackRef = useRef(null)
  const [offset, setOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef(0)
  const lastOffset = useRef(0)

  useEffect(() => {
    let animationId
    const speed = 0.5
    const animate = () => {
      if (!isDragging) {
        setOffset((prev) => (prev - speed) % (trackRef.current.scrollWidth / 2))
      }
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isDragging])

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offset}px)`
    }
  }, [offset])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    dragStart.current = e.clientX
    lastOffset.current = offset
  }
  const handleMouseMove = (e) => {
    if (!isDragging) return
    const delta = e.clientX - dragStart.current
    setOffset(lastOffset.current + delta)
  }
  const handleMouseUp = () => setIsDragging(false)
  const handleTouchStart = (e) => {
    setIsDragging(true)
    dragStart.current = e.touches[0].clientX
    lastOffset.current = offset
  }
  const handleTouchMove = (e) => {
    if (!isDragging) return
    const delta = e.touches[0].clientX - dragStart.current
    setOffset(lastOffset.current + delta)
  }
  const handleTouchEnd = () => setIsDragging(false)

  const loopItems = [...BUSINESSES, ...BUSINESSES]

  return (
    <section className="catalogue-section" id="catalogue">
      <div className="catalogue-container">
        <h2 className="catalogue-title">Our Business Community</h2>

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
    <div key={i} className="business-card">
      <img src={b.logo} alt={b.name} className="business-logo" />

      <h3 className="business-name">{b.name}</h3>

      <div className="business-badges">
        {b.badges.map((badge, idx) => (
          <span key={idx} className="badge">{badge}</span>
        ))}
      </div>

      <p className="business-category-location">
        {b.type} · {b.location} · Employees: {b.employees}
      </p>

      <div className="business-images">
        {b.images.map((img, idx) => (
          <img key={idx} src={img} alt={`Business ${i} image ${idx}`} />
        ))}
      </div>
    </div>
  ))}
</div>

        </div>
        <button className = "See-all">See All</button>
      </div>
    </section>
  )
}