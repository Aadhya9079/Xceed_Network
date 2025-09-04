import Carousel from "react-bootstrap/Carousel";
import "./landingpage.css";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

export default function LandingPage() {
  return (
    <section className="landing-page">
      <Carousel
        interval={4000}        // time each slide stays
        controls={false}
        indicators={false}
        pause={false}          // always autoplay
      >
        <Carousel.Item className="overlay">
          <img className="d-block w-100 carousel-img" src={slide1} alt="Slide 1" />
          <div className="carousel-caption">
            <h3 className="caption-title">Empowering Your Business with Smart Solutions</h3>
            <p className="caption-body">
             Practical strategies and tools to help you grow, scale, and succeed in today’s competitive market.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item className="overlay-light-blue">
          <img className="d-block w-100 carousel-img" src={slide2} alt="Slide 2" />
          <div className="carousel-caption">
            <h3 className="caption-title">Digital Visibility That Drives Growth</h3>
            <p className="caption-body">
              From online directories to branding support, Xceed helps your business get discovered and recognized.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item className="overlay">
          <img className="d-block w-100 carousel-img" src = {slide3} alt="Slide 3" />
          <div className="carousel-caption">
            <h3 className="caption-title">Turning Connections into Collaborations</h3>
            <p className="caption-body">
            Xceed Network connects entrepreneurs, professionals, and business owners to create lasting opportunities.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
