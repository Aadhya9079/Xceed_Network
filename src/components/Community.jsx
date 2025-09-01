import "./Community.css"
import community from "../assets/community.jpeg";
import community1 from "../assets/community1..jpg";
import mentors from "../assets/mentors.jpeg";
import investors from "../assets/investors.jpeg"

export default function Services() {

  return (
    <section class="community-section">
  <div class="community-header">
    <h2>THE COMMUNITY</h2>
    <p>diverse stakeholders, singular vision - everything entrepreneurial</p>
  </div>

  <div class="community-cards">
    <div class="community-card">
      <img src= {community1} alt="Community"/>
      <h3>500,000+</h3>
      <p>Community</p>
    </div>
    <div class="community-card">
      <img src={community} alt="Corporate leaders"/>
      <h3>12,000+</h3>
      <p>Corporate leaders</p>
    </div>
    <div class="community-card">
      <img src={mentors} alt="Entrepreneurs & Mentors"/>
      <h3>50,000+</h3>
      <p>Entrepreneurs & Mentors</p>
    </div>
    <div class="community-card">
      <img src={investors} alt="Investors"/>
      <h3>15,000+</h3>
      <p>Investors</p>
    </div>
  </div>
</section>
  )
}
