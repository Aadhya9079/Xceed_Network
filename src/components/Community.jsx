import "./Community.css"
import community from "../assets/community.jpeg";
import community1 from "../assets/community1..jpg";
import mentors from "../assets/mentors.jpeg";
import investors from "../assets/investors.jpeg"
import city from "../assets/city.jpg"
import workshops from "../assets/workshops.jpg"
import women from "../assets/women.jpg"
import collab from "../assets/collab.jpg"

export default function Services() {

  return (
    <section class="community-section">
  <div class="community-header">
    <h2>The Power of the Xceed Community</h2>
    <p>An ever-growing network of entrepreneurs, leaders, mentors, and investors working together to build business success.</p>
  </div>

  <div class="community-cards">
    <div class="community-card">
      <img src= {community1} alt="Community"/>
      <h3>5000+ Community</h3>
      <p>Entrepreneurs and professionals connected across India.</p>
    </div>
    <div class="community-card">
      <img src={community} alt="Corporate leaders"/>
      <h3>1200+ Corporate leaders</h3>
      <p>Influential decision-makers driving innovation and growth.</p>
    </div>
    <div class="community-card">
      <img src={mentors} alt="Entrepreneurs & Mentors"/>
      <h3>5000+ Entrepreneurs & Mentors</h3>
      <p>Guiding, inspiring, and building businesses every day.</p>
    </div>
    <div class="community-card">
      <img src={investors} alt="Investors"/>
      <h3>1000+ Investors</h3>
      <p>Fueling startups with funding and strategic support.</p>
    </div>
    <div class="community-card">
      <img src={city} alt="Investors"/>
      <h3>100+ Cities Across India</h3>
      <p>Strong presence from metros to Tier 2/3/4 cities.</p>
    </div>

    <div class="community-card">
      <img src={collab} alt="Investors"/>
      <h3>2000+ Collaborations Created</h3>
      <p>Partnerships, referrals, and joint ventures through Xceed.</p>
    </div>
    <div class="community-card">
      <img src={workshops} alt="Investors"/>
      <h3>100+ Workshops & Events</h3>
      <p>Learning, networking, and growth-focused sessions for members.</p>
    </div>
    <div class="community-card">
      <img src={women} alt="Investors"/>
      <h3>2000+ Women Entrepreneurs</h3>
      <p>Supported through dedicated programs like XC-HerRise.</p>
    </div>
  </div>
</section>
  )
}
