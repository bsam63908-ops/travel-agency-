import PackageCard from "./PackageCard";
import "./Packages.css";
function Packages({ tourPackages }) {
  return (
    <section id="packages" className="packages section section--dark">
      <div className="section__container">
        <div className="section__header">
          <p className="section__eyebrow">🗺️ Curated Journeys</p>
          <h2 className="section__title">Tour <span className="gradient-text">Packages</span></h2>
          <p className="section__desc">Handcrafted travel experiences designed by expert guides — all-inclusive, stress-free, unforgettable.</p>
        </div>
        <div className="packages__grid">
          {tourPackages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
        </div>
      </div>
    </section>
  );
}
export default Packages;