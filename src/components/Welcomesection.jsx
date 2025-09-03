import "./welcomesection.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import { motion } from "framer-motion";

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-card">
        <h2 className="welcome-heading">Welcome to XceedNetwork</h2>

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
            Welcome to Xceed Network, where ambitious entrepreneurs, startups,
            and professionals come together to connect, collaborate, and grow.
            Join a thriving business community built to support your journey
            with powerful networking, expert insights, and real growth
            opportunities.
          </motion.p>

          {/* Text2 */}
          <motion.p
            className="welcome-text bottom-left"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At Xceed Network, we empower the entrepreneur, not just the
            enterprise, because true growth happens when individuals are
            supported as much as their ideas. We believe success is driven by
            real connections, shared experiences, and learning alongside a
            community that grows together.
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
      </div>
    </section>
  );
}

export default WelcomeSection;
