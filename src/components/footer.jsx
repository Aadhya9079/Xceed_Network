const Footer = () => {
  return (
    <footer style={{
    background: "linear-gradient(135deg, #adb6df, #2621b4)",
  }}>
      {/* Top Section */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "32px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <img src="/logo.png" alt="Logo" style={{ width: "180px", marginBottom: "10px" }} />
        </div>

        {/* About */}
        <div>
          <h3
            style={{
              fontWeight: "bold",
              borderBottom: "2px solid #D4AF37",
              display: "inline-block",
              marginBottom: "12px",
              paddingBottom: "4px",
            }}
          >
            About
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#ccc" }}>
            <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Mission & Vision</a></li>
            <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Pillars of Xceed</a></li>
            <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Xceed Network Team</a></li>
            <li><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Our Chapters</a></li>
          </ul>
        </div>

        {/* Help Desk */}
        <div>
          <h3
            style={{
              fontWeight: "bold",
              borderBottom: "2px solid #D4AF37",
              display: "inline-block",
              marginBottom: "12px",
              paddingBottom: "4px",
            }}
          >
            Help Desk
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#ccc" }}>
            <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Contact Us</a></li>
            <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Data Privacy & Policy</a></li>
            <li><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            style={{
              fontWeight: "bold",
              borderBottom: "2px solid #D4AF37",
              display: "inline-block",
              marginBottom: "12px",
              paddingBottom: "4px",
            }}
          >
            Contact
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#ccc" }}>
            <li style={{ marginBottom: "12px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <span style={{ color: "#D4AF37" }}>📍</span>
              3964 Rivermark Plaza #113, Santa Clara, CA 95054, USA
            </li>
            <li style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#D4AF37" }}>📞</span> +1 408-567-0700
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#D4AF37" }}>✉️</span> global@tie.org
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          backgroundColor: "#D4AF37",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px 24px",
          flexWrap: "wrap",
          textAlign: "center",
          gap: "3px",
        }}
      >
        <div style={{ display: "flex", gap: "16px", marginTop: "2px" }}>
          <a href="#" style={{ color: "#212529", fontSize: "20px", textDecoration: "none" }}>in</a>
          <a href="#" style={{ color: "#212529", fontSize: "20px", textDecoration: "none" }}>f</a>
          <a href="#" style={{ color: "#212529", fontSize: "20px", textDecoration: "none" }}>X</a>
        </div>
        <p style={{ margin: 0 }}>Copyright © 2025 – Xceed Network</p>
      </div>
    </footer>
  )
}

export default Footer