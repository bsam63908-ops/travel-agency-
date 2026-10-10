export const destinations = [
  { id: 1, name: "Maldives", country: "Indian Ocean", image: "/images/maldives.jpg", rating: 4.9, reviews: 1240, price: 2499, duration: "7 Days", tag: "Beach", tagColor: "#0ea5e9", description: "Overwater bungalows, pristine lagoons and vibrant coral reefs await in the world most stunning island paradise." },
  { id: 2, name: "Paris", country: "France", image: "/images/paris.jpg", rating: 4.8, reviews: 3560, price: 1899, duration: "5 Days", tag: "Culture", tagColor: "#ec4899", description: "The City of Light captivates with its iconic Eiffel Tower, world-class cuisine, and timeless romantic atmosphere." },
  { id: 3, name: "Bali", country: "Indonesia", image: "/images/bali.jpg", rating: 4.7, reviews: 2890, price: 1299, duration: "8 Days", tag: "Adventure", tagColor: "#22c55e", description: "Discover terraced rice paddies, ancient temples, surf-ready beaches, and a rich spiritual culture unlike anywhere else." },
  { id: 4, name: "Rome", country: "Italy", image: "/images/rome.jpg", rating: 4.8, reviews: 4100, price: 1699, duration: "6 Days", tag: "History", tagColor: "#f59e0b", description: "Walk through millennia of history in the Eternal City from the Colosseum to Vatican City and beyond." },
  { id: 5, name: "Japan", country: "Asia", image: "/images/japan.jpg", rating: 4.9, reviews: 2100, price: 2199, duration: "10 Days", tag: "Culture", tagColor: "#ec4899", description: "Mount Fuji, cherry blossoms, ancient shrines, and cutting-edge Tokyo combine for an unforgettable journey." },
  { id: 6, name: "Dubai", country: "UAE", image: "/images/dubai.jpg", rating: 4.7, reviews: 1870, price: 1999, duration: "5 Days", tag: "Luxury", tagColor: "#a855f7", description: "Experience futuristic skylines, luxury shopping, golden deserts, and world-record attractions in the City of Gold." },
];
export const tourPackages = [
  { id: 1, title: "European Grand Tour", destinations: ["Paris", "Rome", "Santorini"], duration: "14 Days / 13 Nights", groupSize: "Max 16 People", price: 3499, oldPrice: 4199, image: "/images/paris.jpg", badge: "Best Seller", badgeColor: "#f59e0b", includes: ["Flights", "Hotels", "Meals", "Guide"], difficulty: "Easy" },
  { id: 2, title: "Tropical Island Escape", destinations: ["Maldives", "Bali"], duration: "10 Days / 9 Nights", groupSize: "Max 12 People", price: 2899, oldPrice: 3499, image: "/images/maldives.jpg", badge: "Popular", badgeColor: "#0ea5e9", includes: ["Flights", "Resort", "Breakfast", "Snorkeling"], difficulty: "Easy" },
  { id: 3, title: "Asian Cultural Journey", destinations: ["Japan", "Bali", "Dubai"], duration: "18 Days / 17 Nights", groupSize: "Max 20 People", price: 4299, oldPrice: 5199, image: "/images/japan.jpg", badge: "New", badgeColor: "#22c55e", includes: ["Flights", "Hotels", "Meals", "Guide"], difficulty: "Moderate" },
];
export const testimonials = [
  { id: 1, name: "Sarah Mitchell", location: "New York, USA", avatar: "SM", avatarBg: "#6366f1", rating: 5, text: "WanderLux completely transformed our honeymoon into an absolute dream. Every detail was perfectly arranged - from the overwater villa in Maldives to our private sunset cruise. We could not have asked for more!", trip: "Maldives Honeymoon Package", date: "October 2024" },
  { id: 2, name: "James and Emma Chen", location: "London, UK", avatar: "JE", avatarBg: "#0ea5e9", rating: 5, text: "The European Grand Tour exceeded every expectation. Our guide Marco was incredibly knowledgeable, and the itinerary struck a perfect balance between iconic landmarks and hidden gems most tourists never find.", trip: "European Grand Tour", date: "September 2024" },
  { id: 3, name: "Priya Sharma", location: "Mumbai, India", avatar: "PS", avatarBg: "#ec4899", rating: 5, text: "The Asian Cultural Journey was life-changing. From the sakura blossoms of Japan to Bali spiritual temples - every moment felt magical. The team handled everything flawlessly. Already planning my next trip!", trip: "Asian Cultural Journey", date: "August 2024" },
];
export const stats = [
  { id: 1, value: "50K+", label: "Happy Travelers", icon: "✈️" },
  { id: 2, value: "120+", label: "Destinations", icon: "🌍" },
  { id: 3, value: "15+", label: "Years Experience", icon: "🏆" },
  { id: 4, value: "98%", label: "Satisfaction Rate", icon: "⭐" },
];
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "destinations", label: "Destinations" },
  { id: "packages", label: "Packages" },
  { id: "about", label: "About" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];