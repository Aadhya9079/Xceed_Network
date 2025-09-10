import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Event1 from "../assets/event.jpeg"
import Event2 from "../assets/Event1.jpeg"
import Event3 from "../assets/Events.jpeg"
import "./Events.css"

const EVENTS_DATA = [
  {
    image: Event1,
    date: new Date("2025-09-25"),
    title: "The Goof-Up Playbook: How Failures Built iThink Logistics"
  },
  {
    image: Event2,
    date: new Date("2025-09-19"),
    title: "HEN Bangalore Networking Meet"
  },
  {
    image: Event3,
    date: new Date("2025-09-18"),
    title: "HEN Virtual Networking Meet September"
  }
]

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [showCalendar, setShowCalendar] = useState(false)

  const filteredEvents = selectedDate
    ? EVENTS_DATA.filter(event => event.date.toDateString() === selectedDate.toDateString())
    : EVENTS_DATA

  const handleDateChange = (date) => {
    setSelectedDate(date)
    setShowCalendar(false)
  }

  return (
    <section className="events-section">
      <h2 className = "events-section-heading">XceedEvents & Experiences</h2>
      <p className="events-description">
       At Xceed Network, events are more than just gatherings — they are opportunities to connect, learn, and grow. From intimate mentorship sessions to large-scale networking summits, our events are designed to create meaningful interactions and lasting business impact.
      </p>

      <div
        className="events-select-month"
        onClick={() => setShowCalendar(prev => !prev)}
        style={{ cursor: "pointer", display: "inline-block" }}
      >
        {selectedDate ? selectedDate.toDateString() : "Select Month ▼"}
      </div>

      {showCalendar && (
        <DatePicker
  selected={selectedDate}
  onChange={handleDateChange}
  minDate={new Date()}
  inline
  calendarClassName="custom-calendar"
/>
      )}

      <div className="events-row">
        {filteredEvents.length ? (
          filteredEvents.map((event, idx) => (
            <div key={idx} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={`Event ${idx + 1}`} />
              </div>
              <div className="event-date">{event.date.toLocaleDateString('en-GB')}</div>
              <h3 className="event-title">{event.title}</h3>
              <button className="event-register-btn">Register Now</button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>No events found on this date.</p>
        )}
      </div>

      <div className="events-view-all">View All</div>
    </section>
  )
}

export default Events