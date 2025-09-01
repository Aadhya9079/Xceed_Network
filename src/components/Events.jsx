import "./Events.css"
import Event from "../assets/Events.jpg"
import Event1 from "../assets/Event1.jpg"

const Events = () => {
  return (
    <section className="events-section">
      <h2>XCEED EVENTS</h2>
      <div className="events-row">

        {/* ===== First Event ===== */}
        <div className="event-card">
          <div className="event-image">
            <img src={Event} alt="Global Summit" />
            <div className="event-logo">
              {/* <img src="tie-global-logo.png" alt="TiE Global Summit"/> */}
            </div>
          </div>
          <div className="event-content">
            <p>The Xceed Network is an annual conference ...</p>
            <p>The summit provides a platform ...</p>
            <p>Leaders and innovators come together ...</p>
            <p>Networking opportunities like never before ...</p>
          </div>
        </div>

        {/* ===== Second Event ===== */}
        <div className="event-card">
          <div className="event-image">
            <img src={Event1} alt="TiECon" />
            <div className="event-logo">
              {/* <img src="tie-con-logo.png" alt="TiECon"/> */}
            </div>
          </div>
          <div className="event-content">
            <p>Xceed brings together the brightest minds ...</p>
            <p>Whether you’re a startup founder ...</p>
            <p>Workshops and panel discussions ...</p>
            <p>Global exposure with local insights ...</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Events