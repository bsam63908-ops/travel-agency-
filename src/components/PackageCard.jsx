import { useState } from "react";
import "./PackageCard.css";

function PackageCard({ pkg }) {
  const { title, destinations, duration, groupSize, price, oldPrice, image, badge, badgeColor, includes, difficulty } = pkg;
  const [booked, setBooked] = useState(false);

  const handleBook = () => {
    setBooked(true);
    setTimeout(() => setBooked(false), 1500);
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pkg-card">
      <div className="pkg-card__img-wrap">
        <img src={image} alt={title} className="pkg-card__img" loading="lazy" />
        <div className="pkg-card__img-overlay" />
        <span className="pkg-card__badge" style={{ background: badgeColor }}>{badge}</span>
        <div className="pkg-card__savings">Save ${oldPrice - price}</div>
      </div>
      <div className="pkg-card__body">
        <h3 className="pkg-card__title">{title}</h3>
        <div className="pkg-card__destinations">
          {destinations.map((d, i) => <span key={i} className="pkg-card__dest-chip">📍 {d}</span>)}
        </div>
        <div className="pkg-card__meta">
          <div className="pkg-card__meta-item"><span>⏱</span><span>{duration}</span></div>
          <div className="pkg-card__meta-item"><span>👥</span><span>{groupSize}</span></div>
          <div className="pkg-card__meta-item"><span>🎯</span><span>{difficulty}</span></div>
        </div>
        <div className="pkg-card__includes">
          {includes.map((item, i) => <span key={i} className="pkg-card__include">✓ {item}</span>)}
        </div>
        <div className="pkg-card__footer">
          <div className="pkg-card__pricing">
            <span className="pkg-card__old-price">${oldPrice.toLocaleString()}</span>
            <span className="pkg-card__price">${price.toLocaleString()}</span>
            <span className="pkg-card__per">/person</span>
          </div>
          <button className={`pkg-card__btn${booked ? " pkg-card__btn--booked" : ""}`} onClick={handleBook}>
            {booked ? "✓ Booked!" : "Book Package →"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default PackageCard;