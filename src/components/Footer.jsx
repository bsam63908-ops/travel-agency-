import { useState } from "react";
import "./Footer.css";
function Footer({ siteName, navLinks }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  const topDests = ["Maldives", "Paris", "Bali", "Rome", "Japan", "Dubai"];
  const socials = [
    { label: "Facebook", icon: "f", url: "https://facebook.com" },
    { label: "Instagram", icon: "📷", url: "https://instagram.com" },
    { label: "Twitter", icon: "X", url: "https://twitter.com" },
    { label: "YouTube", icon: "▶", url: "https://youtube.com" },
  ];
  const policies = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo" onClick={() => scrollTo("home")} style={{ cursor: "pointer" }}>
              <span className="footer__logo-icon">✈</span>
              <span className="footer__logo-text">{siteName}</span>
            </div>
            <p className="footer__tagline">Crafting extraordinary travel experiences for the modern explorer. Your dream destination is just one click away.</p>
            <div className="footer__social">
              {socials.map((s) => (
                <button key={s.label} className="footer__social-btn" aria-label={s.label} onClick={() => window.open(s.url, "_blank")}>
                  {s.icon}
                </button>
              ))}
            </div>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__list">
              {navLinks.map((link) => (
                <li key={link.id}><button className="footer__link" onClick={() => scrollTo(link.id)}>{link.label}</button></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Top Destinations</h4>
            <ul className="footer__list">
              {topDests.map((d) => (
                <li key={d}>
                  <button className="footer__link" onClick={() => scrollTo("destinations")}>📍 {d}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Travel Inspiration</h4>
            <p className="footer__newsletter-desc">Get exclusive deals and travel tips delivered to your inbox.</p>
            {subscribed ? (
              <div className="footer__subscribed">✅ Subscribed! Thank you.</div>
            ) : (
              <form className="footer__newsletter" onSubmit={handleSubscribe}>
                <input
                  className="footer__newsletter-input"
                  placeholder="Your email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="footer__newsletter-btn" type="submit">Subscribe</button>
              </form>
            )}
            <div className="footer__trust">🔒 No spam. Unsubscribe anytime.</div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} {siteName}. All rights reserved. Made with ❤️ for wanderers.</p>
          <div className="footer__bottom-links">
            {policies.map((item) => (
              <button key={item} className="footer__bottom-link" onClick={() => alert(`${item} coming soon!`)}>{item}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;