import "./Hero.css";
function Hero({ heroData, onExplore }) {
  const { title, highlight, subtitle, stats } = heroData;
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <img src="/images/hero_bg.jpg" alt="Santorini Greece" className="hero__bg-img" />
        <div className="hero__overlay" />
      </div>
      <div className="hero__badge hero__badge--tl">
        <span>🌟</span>
        <div><div className="hero__badge-title">Top Rated</div><div className="hero__badge-sub">Travel Agency</div></div>
      </div>
      <div className="hero__badge hero__badge--br">
        <span>✈️</span>
        <div><div className="hero__badge-title">50K+ Trips</div><div className="hero__badge-sub">Completed</div></div>
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">✦ Your Journey Begins Here ✦</p>
        <h1 className="hero__title">{title}<br /><span className="hero__highlight">{highlight}</span></h1>
        <p className="hero__subtitle">{subtitle}</p>
        <div className="hero__search">
          <div className="hero__search-group">
            <span>📍</span>
            <input className="hero__search-input" placeholder="Where do you want to go?" type="text" />
          </div>
          <div className="hero__search-divider" />
          <div className="hero__search-group">
            <span>📅</span>
            <input className="hero__search-input" placeholder="Travel dates" type="text" />
          </div>
          <button className="hero__search-btn" onClick={onExplore}>Search</button>
        </div>
        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={onExplore}>Explore Destinations</button>
          <button className="hero__btn hero__btn--secondary" onClick={() => document.getElementById("packages").scrollIntoView({ behavior: "smooth" })}>
            <span>▶</span> View Packages
          </button>
        </div>
        <div className="hero__stats">
          {stats.map((stat) => (
            <div key={stat.id} className="hero__stat">
              <span className="hero__stat-icon">{stat.icon}</span>
              <div>
                <div className="hero__stat-value">{stat.value}</div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero__scroll">
        <div className="hero__scroll-dot" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
export default Hero;