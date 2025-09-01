import Carousel from "react-bootstrap/Carousel";
import "./landingpage.css";

import bgImage1 from "../assets/image1.jpg";
import landing from "../assets/landing.jpeg";
import landing1 from "../assets/landing1.jpeg";

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
          <img className="d-block w-100 carousel-img" src={bgImage1} alt="Slide 1" />
          <div className="carousel-caption">
            <h1 className="caption-title">Entrepreneur’s Organization</h1>
            <p className="caption-body">
              Xceed network of entrepreneurs empowering leaders through peer
              learning, mentorship, and growth opportunities.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item className="overlay-light-blue">
          <img className="d-block w-100 carousel-img" src={landing} alt="Slide 2" />
          <div className="carousel-caption">
            <h2 className="caption-title">Digital solution for a smart business</h2>
            <p className="caption-body">
              Smart digital solutions to streamline, scale, and simplify your
              business growth journey.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item className="overlay">
          <img className="d-block w-100 carousel-img" src={landing1} alt="Slide 3" />
          <div className="carousel-caption">
            <h3 className="caption-title">Empowering Your Business With Smart Solutions</h3>
            <p className="caption-body">
              Empowering your business with smart, scalable solutions for growth,
              efficiency, and long-term success.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
