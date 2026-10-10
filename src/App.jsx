import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { destinations, tourPackages, testimonials, stats, navLinks } from "./data/travelData";

function App() {
  const siteName = "WanderLux";
  const heroData = {
    title: "Discover the World,",
    highlight: "Your Way.",
    subtitle: "Unlock breathtaking destinations, curated tour packages, and memories that last a lifetime. Expert guides, unbeatable prices.",
    stats,
  };
  const aboutData = {
    title: "Your Trusted",
    subtitle: "Travel Partner",
    description: "Since 2009, WanderLux has been turning travel dreams into extraordinary realities. We believe every journey should be seamless, immersive, and transformative. Our team of passionate travel experts crafts personalised itineraries that match exactly who you are.",
    features: [
      { icon: "🗺️", title: "Expert Local Guides", desc: "Partnered with 500+ certified local guides across 120+ destinations for authentic cultural immersion." },
      { icon: "💳", title: "Best Price Guarantee", desc: "We compare thousands of options to ensure you always get the best value without compromising quality." },
      { icon: "🛡️", title: "Safe and Secure Travel", desc: "24/7 emergency support, comprehensive travel insurance, and real-time trip monitoring for your peace of mind." },
      { icon: "🌱", title: "Sustainable Tourism", desc: "Committed to eco-friendly practices - we partner with sustainable hotels and carbon-offset all group tours." },
    ],
    stats,
  };
  const scrollToDestinations = () => {
    const el = document.getElementById("destinations");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="app">
      <Navbar navLinks={navLinks} siteName={siteName} />
      <Hero heroData={heroData} onExplore={scrollToDestinations} />
      <Destinations destinations={destinations} />
      <Packages tourPackages={tourPackages} />
      <About aboutData={aboutData} />
      <Testimonials testimonials={testimonials} />
      <Contact />
      <Footer siteName={siteName} navLinks={navLinks} />
    </div>
  );
}
export default App;