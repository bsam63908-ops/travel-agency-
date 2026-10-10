import "./About.css";
function About({ aboutData }) {
  const { title, subtitle, description, features, stats } = aboutData;
  const handleLearnMore = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="about" className="about section">
      <div className="section__container">
        <div className="about__grid">
          <div className="about__images">
            <div className="about__img-main">
              <img src="/images/about_team.jpg" alt="WanderLux team" />
            </div>
            <div className="about__img-badge about__img-badge--1">
              <span>🏆</span>
              <div><div className="about__img-badge-val">Award</div><div className="about__img-badge-sub">Winning Agency</div></div>
            </div>
            <div className="about__img-badge about__img-badge--2">
              <span>⭐</span>
              <div><div className="about__img-badge-val">4.9/5</div><div className="about__img-badge-sub">Customer Rating</div></div>
            </div>
            <div className="about__stat-strip">
              {stats.map((s) => (
                <div key={s.id} className="about__stat">
                  <span className="about__stat-val">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about__content">
            <p className="section__eyebrow">🌟 Who We Are</p>
            <h2 className="about__title">{title} <span className="gradient-text">{subtitle}</span></h2>
            <p className="about__desc">{description}</p>
            <div className="about__features">
              {features.map((f, i) => (
                <div key={i} className="about__feature">
                  <div className="about__feature-icon">{f.icon}</div>
                  <div>
                    <h4 className="about__feature-title">{f.title}</h4>
                    <p className="about__feature-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-primary" onClick={handleLearnMore}>Learn More About Us →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;