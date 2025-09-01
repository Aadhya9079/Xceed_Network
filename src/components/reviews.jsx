import "../components/reviews.css" 
import review1 from "../assets/review1.jpeg"
import review2 from "../assets/review2.jpeg"
import review3 from "../assets/review3.jpeg"
const Reviews = () => {
  return (
    <section className="membership-section">
      <div className="membership-container">
        <h2 className="membership-title">HAPPY CUSTOMERS</h2>

        <div className="membership-cards">

          {/* Charter Member */}
          <div className="membership-card">
            <img src={review1} alt="Reviews"/>
            <h3 className="membership-heading">
              CHARTER <br /> MEMBER
            </h3>
            <p className="membership-desc">
              Xceed Charter Members (CMs) are successful, high profile entrepreneurs, 
              corporate intrapreneurs and thought leaders, who have reached a stage 
              in their professional life when they are ready, willing and able to 
              contribute to fellow members.
            </p>
          </div>

          {/* Affiliate Member */}
          <div className="membership-card">
            <img src={review2} alt="Reviews"/>
            <h3 className="membership-heading">
              AFFILIATE <br /> MEMBER
            </h3>
            <p className="membership-desc">
             Xceed Affliate Members are Entrepreneurs who are growing / scaling 
              their business and should have a minimum of $2 million ARR. 
              Affiliate members will have access to follow on investments, 
              mentors and potential customers from the TiE network.
            </p>
          </div>

          {/* Associate Member */}
          <div className="membership-card">
            <img src={review3} alt="Reviews"/>
            <h3 className="membership-heading">
              ASSOCIATE <br /> MEMBER
            </h3>
            <p className="membership-desc">
              Xceed Associate members are entrepreneurs, young professionals or 
              those interested in forming a new business, learning new trends 
              in the marketplace or networking and successfully moving ahead 
              in their careers.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Reviews