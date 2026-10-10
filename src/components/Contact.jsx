import { useState } from "react";
import "./Contact.css";
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", destination: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", destination: "", message: "" });
  };
  const perks = [
    { icon: "🌍", title: "Global Network", desc: "Access to 120+ destinations with local expert partners" },
    { icon: "💎", title: "Premium Service", desc: "24/7 dedicated travel concierge for every booking" },
    { icon: "🛡️", title: "Best Price Guarantee", desc: "We match any comparable offer, no questions asked" },
    { icon: "✅", title: "Flexible Booking", desc: "Free cancellation up to 30 days before departure" },
  ];
  return (
    <section id="contact" className="contact section section--dark">
      <div className="section__container">
        <div className="section__header">
          <p className="section__eyebrow">📩 Get in Touch</p>
          <h2 className="section__title">Start Your <span className="gradient-text">Adventure</span></h2>
          <p className="section__desc">Ready to explore the world? Tell us your dream destination and we will craft the perfect journey for you.</p>
        </div>
        <div className="contact__grid">
          <div className="contact__info">
            <h3 className="contact__info-title">Why Choose WanderLux?</h3>
            {perks.map((item, i) => (
              <div key={i} className="contact__info-item">
                <div className="contact__info-icon">{item.icon}</div>
                <div>
                  <h4 className="contact__info-item-title">{item.title}</h4>
                  <p className="contact__info-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="contact__details">
              <div className="contact__detail">📞 +1 (800) WANDER-LUX</div>
              <div className="contact__detail">✉️ hello@wanderlux.travel</div>
              <div className="contact__detail">📍 123 Explorer Ave, New York, NY 10001</div>
            </div>
          </div>
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Our travel experts will reach out within 24 hours to craft your perfect trip.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <h3 className="contact__form-title">Plan My Trip</h3>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="name">Full Name</label>
                    <input className="contact__input" id="name" name="name" placeholder="John Doe" required type="text" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="email">Email</label>
                    <input className="contact__input" id="email" name="email" placeholder="john@email.com" required type="email" value={form.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="destination">Dream Destination</label>
                  <select className="contact__input" id="destination" name="destination" value={form.destination} onChange={handleChange} required>
                    <option value="">Select a destination...</option>
                    <option>Maldives</option><option>Paris, France</option><option>Bali, Indonesia</option>
                    <option>Rome, Italy</option><option>Japan</option><option>Dubai, UAE</option><option>Other</option>
                  </select>
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="message">Tell Us About Your Dream Trip</label>
                  <textarea className="contact__input contact__textarea" id="message" name="message" placeholder="How many travelers? When? Special requests?" required rows="4" value={form.message} onChange={handleChange} />
                </div>
                <button className="btn-primary contact__submit" type="submit">Send My Request ✈</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;