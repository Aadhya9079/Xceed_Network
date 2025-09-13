import React, { useRef } from 'react'
import './reviews.css'
import Review1 from "../assets/review1.png"
import Review2 from "../assets/review2.png"
import Review3 from "../assets/review3.png"

const reviews = [
  {
    name: 'Claire Armstrong',
    position: 'Director of Digital Product',
    company: 'Nayati',
    description: 'Avo saved my sanity when juggling our tracking plans. We now generate analytics within minutes of a new feature launch because of the pre-work we’ve done in Avo.',
    avatar: Review1
  },
  {
    name: 'Nicholas Threapleton',
    position: 'Lead Product Analyst',
    company: 'Minato',
    description: 'Buying Avo was possibly the most impactful decision I’ve made. I don’t know how product companies do any analytics without Avo. It’s become the foundation of our analytics.',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg'
  },
  {
    name: 'Tomi Keah',
    position: 'Senior Data Analyst',
    company: 'ZenBusiness',
    description: 'The best data governance platform for your analytics events. Overall I’m very happy with the product and our data quality improves on a daily basis.',
    avatar: Review3
  },
    {
    name: 'Claire Armstrong',
    position: 'Director of Digital Product',
    company: 'Fender',
    description: 'Avo saved my sanity when juggling our tracking plans. We now generate analytics within minutes of a new feature launch because of the pre-work we’ve done in Avo.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Nicholas Threapleton',
    position: 'Lead Product Analyst',
    company: 'Culture Amp',
    description: 'Buying Avo was possibly the most impactful decision I’ve made. I don’t know how product companies do any analytics without Avo. It’s become the foundation of our analytics.',
    avatar: Review2
  },
  {
    name: 'Tomi Keah',
    position: 'Senior Data Analyst',
    company: 'ZenBusiness',
    description: 'The best data governance platform for your analytics events. Overall I’m very happy with the product and our data quality improves on a daily basis.',
    avatar: Review3
  }
]

export default function Reviews() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="reviews-container">
      <h2>Xceed Success Stories</h2>
      <h3>What Our <span className="highlight">Clients</span> Say</h3>

      <div className="scroll-controls">
        <img 
          src="https://img.icons8.com/ios-filled/50/000000/chevron-left.png" 
          alt="Scroll Left" 
          className="scroll-btn"
          onClick={() => scroll('left')} 
        />
        <img 
          src="https://img.icons8.com/ios-filled/50/000000/chevron-right.png" 
          alt="Scroll Right" 
          className="scroll-btn"
          onClick={() => scroll('right')} 
        />
      </div>

      <div className="reviews-scroll" ref={scrollRef}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="quote-icon">❝</div>
            <div className="company">{review.company}</div>
            <p className="review-text">{review.description}</p>

            <div className="review-footer">
              <img src={review.avatar} alt={review.name} className="avatar" />
              <div className="reviewer-info">
                <h5>{review.name}</h5>
                <p>{review.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="view-all">View All →</button>
    </div>
  )
}