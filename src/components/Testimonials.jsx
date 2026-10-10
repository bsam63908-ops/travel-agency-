import { useState } from "react";
import "./Testimonials.css";
function Testimonials({ testimonials }) {
  const [active, setActive] = useState(0);
  const renderStars = (count) => Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < count ? "star star--filled" : "star"}>&#9733;</span>
  ));
  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
  return (
    <section id="testimonials" className="testimonials section">
      <div className="section__container">
        <div className="section__header">
          <p className="section__eyebrow">💬 What Travelers Say</p>
          <h2 className="section__title">Real <span className="gradient-text">Experiences</span></h2>
          <p className="section__desc">Thousands of happy travelers have made memories with us. Here are their stories.</p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={t.id} className={`testi-card${i === active ? " testi-card--active" : ""}`} onClick={() => setActive(i)}>
              <div className="testi-card__quote">"</div>
              <div className="testi-card__stars">{renderStars(t.rating)}</div>
              <p className="testi-card__text">{t.text}</p>
              <div className="testi-card__trip">✈️ {t.trip}</div>
              <div className="testi-card__author">
                <div className="testi-card__avatar" style={{ background: t.avatarBg }}>{t.avatar}</div>
                <div>
                  <div className="testi-card__name">{t.name}</div>
                  <div className="testi-card__location">📍 {t.location}</div>
                  <div className="testi-card__date">{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonials__controls">
          <button className="testi-btn" onClick={prev}>‹</button>
          <div className="testi-dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`testi-dot${i === active ? " testi-dot--active" : ""}`} onClick={() => setActive(i)} />
            ))}
          </div>
          <button className="testi-btn" onClick={next}>›</button>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;