import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);
  return (
    <nav className="navbar navbar-expand-lg bg-principal navbar-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Federico Meza
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="nav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleLinkClick}>
                About me
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={handleLinkClick}
              >
                Proyects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
