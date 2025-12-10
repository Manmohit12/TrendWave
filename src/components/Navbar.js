import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    background: "#ffffff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    borderBottom: "1px solid #f0f0f0",
    padding: "1rem 0",
  };

  const brandStyle = {
    fontSize: "1.6rem",
    fontWeight: "700",
    letterSpacing: "-0.5px",
    color: "#1a1a1a",
    marginLeft: "1.5rem",
    transition: "all 0.3s ease",
  };

  const navLinkStyle = {
    fontSize: "0.95rem",
    fontWeight: "500",
    textTransform: "capitalize",
    letterSpacing: "0.3px",
    color: "#404040",
    margin: "0 0.75rem",
    padding: "0.5rem 0",
    borderRadius: "0",
    transition: "all 0.3s ease",
    position: "relative",
    borderBottom: "2px solid transparent",
  };

  // centralize small spacing values to avoid accidental undefined variable usage
  const smallMargin = "1.5rem";
  const logoLeft = "2rem";
  const logoRight = "0.5rem";

  const navItemHoverStyle = ( e ) => {
    e.target.style.color = "#000";
    e.target.style.borderBottom = "2px solid #1a1a1a";
  };

  const navItemLeaveStyle = ( e ) => {
    e.target.style.color = "#404040";
    e.target.style.borderBottom = "2px solid transparent";
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={navStyle}>
        <img alt="Logo" src="trend.png" style={{ height: "40px", marginLeft: logoLeft, marginRight: logoRight }} />
        <Link className="navbar-brand" to="/" style={brandStyle}>
          TrendWave
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "#e0e0e0", marginRight: smallMargin }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto" style={{ marginRight: smallMargin }}>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={navLinkStyle}
                onMouseEnter={navItemHoverStyle}
                onMouseLeave={navItemLeaveStyle}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/business"
                style={navLinkStyle}
                onMouseEnter={navItemHoverStyle}
                onMouseLeave={navItemLeaveStyle}
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/entertainment"
                style={navLinkStyle}
                onMouseEnter={navItemHoverStyle}
                onMouseLeave={navItemLeaveStyle}
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/health"
                style={navLinkStyle}
                onMouseEnter={navItemHoverStyle}
                onMouseLeave={navItemLeaveStyle}
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/science"
                style={navLinkStyle}
                onMouseEnter={navItemHoverStyle}
                onMouseLeave={navItemLeaveStyle}
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/sports"
                style={navLinkStyle}
                onMouseEnter={navItemHoverStyle}
                onMouseLeave={navItemLeaveStyle}
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/technology"
                style={navLinkStyle}
                onMouseEnter={navItemHoverStyle}
                onMouseLeave={navItemLeaveStyle}
              >
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
