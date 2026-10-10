import { useState } from "react";
import "./DestinationCard.css";

function DestinationCard({ destination }) {
  const { name, country, image, rating, reviews, price, duration, tag, tagColor, description } = destination;
  const [wishlisted, setWishlisted] = useState(false);
  const [booked, setBooked] = useState(false);

  const renderStars = (r) => Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < Math.floor(r) ? "star star--filled" : "star"}>&#9733;</span>
  ));

  const handleBook = () => {
    setBooked(true);
    setTimeout(() => setBooked(false), 1500);
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleWishlist = () => setWishlisted(!wishlisted);

  return (
    <div className="dest-card">
      <div className="dest-card__img-wrap">
        <img src={image} alt={name} className="dest-card__img" loading="lazy" />
        <div className="dest-card__img-overlay" />
        <span className="dest-card__tag" style={{ background: tagColor }}>{tag}</span>
        <button
          className={`dest-card__wishlist${wishlisted ? " dest-card__wishlist--active" : ""}`}
          aria-label="Toggle wishlist"
          onClick={handleWishlist}
          title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          {wishlisted ? "❤️" : "🤍"}
        </button>
        <div className="dest-card__duration">⏱ {duration}</div>
      </div>
      <div className="dest-card__body">
        <div className="dest-card__header">
          <div>
            <h3 className="dest-card__name">{name}</h3>
            <p className="dest-card__country">📍 {country}</p>
          </div>
          <div className="dest-card__rating">
            <div className="dest-card__stars">{renderStars(rating)}</div>
            <span className="dest-card__rating-val">{rating}</span>
            <span className="dest-card__reviews">({reviews.toLocaleString()})</span>
          </div>
        </div>
        <p className="dest-card__desc">{description}</p>
        <div className="dest-card__footer">
          <div className="dest-card__price">
            <span className="dest-card__price-from">From</span>
            <span className="dest-card__price-val">${price.toLocaleString()}</span>
            <span className="dest-card__price-per">/person</span>
          </div>
          <button className={`dest-card__btn${booked ? " dest-card__btn--booked" : ""}`} onClick={handleBook}>
            {booked ? "✓ Booked!" : "Book Now →"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default DestinationCard;