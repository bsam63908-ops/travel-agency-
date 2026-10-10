import DestinationCard from "./DestinationCard";
import "./Destinations.css";
function Destinations({ destinations }) {
  const handleViewAll = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="destinations" className="destinations section">
      <div className="section__container">
        <div className="section__header">
          <p className="section__eyebrow">🌍 Explore the World</p>
          <h2 className="section__title">Popular <span className="gradient-text">Destinations</span></h2>
          <p className="section__desc">From tropical paradises to ancient wonders — find the destination that calls to your soul.</p>
        </div>
        <div className="destinations__grid">
          {destinations.map((d) => <DestinationCard key={d.id} destination={d} />)}
        </div>
        <div className="destinations__cta">
          <button className="btn-outline" onClick={handleViewAll}>View All Destinations →</button>
        </div>
      </div>
    </section>
  );
}
export default Destinations;