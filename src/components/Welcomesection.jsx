import "./welcomesection.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import { motion } from "framer-motion";

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-card">
        <h2 className="welcome-heading">The XCEED <span className="w-heading">JOURNEY</span></h2>

        <div className="welcome-diagonal">
          {/* Img1 */}
          <motion.img
            src={img1}
            alt="Empowering Entrepreneurs"
            className="welcome-img top-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          />

          {/* Text1 */}
          <motion.p
            className="welcome-text top-right"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
           At Xceed Network, we believe that every business deserves the right connections to grow - whether it’s a startup in a small town or an established company in a big city. We are more than just a networking platform; we are a community of dreamers, doers, and achievers who come together to share opportunities, build trust, and grow stronger together.
<br></br>
           Our purpose is simple : to make business networking accessible, meaningful, and result-driven for everyone. While many platforms focus only on metros, Xceed Network is built with a special focus on Tier 2, Tier 3, and Tier 4 cities - the true backbone of India’s growth story. Here, entrepreneurs, professionals, and business owners can connect, collaborate, and create success stories that go beyond boundaries.
           <br></br>
           <br></br>
           <h2 className = "vision">Our Vision</h2>
           To become India’s most inclusive and trusted business networking community, where entrepreneurs from every city, town, and region find equal opportunities to grow and succeed.
          </motion.p>

          {/* Text2 */}
          <motion.p
            className="welcome-text bottom-left"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="mission">Our Mission</h2>
           Our mission is to create an ecosystem that goes beyond exchanging business cards. At Xceed Network, members build genuine relationships, share referrals, and support each other’s growth. Through networking meets, digital visibility, business directories, and knowledge-sharing, we help transform simple connections into long-lasting partnerships.
          </motion.p>

          {/* Img2 */}
          <motion.img
            src={img2}
            alt="Business Growth"
            className="welcome-img bottom-right"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </div>
        <p className="last-p">At the heart of Xceed Network is a belief : business is not just about profits, it’s about people. Together, we celebrate wins, support each other through challenges, and create opportunities that help everyone rise. Because when we come together, we don’t just succeed - <span className="we-xceed">WE XCEED</span>.</p>
      </div>
    </section>
  );
}

export default WelcomeSection;
