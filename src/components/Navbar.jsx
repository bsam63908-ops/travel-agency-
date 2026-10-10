import { useState, useEffect } from "react";
import "./Navbar.css";
function Navbar({ navLinks, siteName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) { setActiveSection(sections[i]); break; }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <div className="navbar__logo" onClick={() => scrollTo("home")}>
          <span className="navbar__logo-icon">✈</span>
          <span className="navbar__logo-text">{siteName}</span>
        </div>
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button className={`navbar__link${activeSection === link.id ? " navbar__link--active" : ""}`} onClick={() => scrollTo(link.id)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button className="navbar__cta" onClick={() => scrollTo("contact")}>Book Now</button>
        <button className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
      <div className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}>
        {navLinks.map((link) => (
          <button key={link.id} className={`navbar__mobile-link${activeSection === link.id ? " navbar__mobile-link--active" : ""}`} onClick={() => scrollTo(link.id)}>
            {link.label}
          </button>
        ))}
        <button className="navbar__mobile-cta" onClick={() => scrollTo("contact")}>Book Now ✈</button>
      </div>
    </nav>
  );
}
export default Navbar;