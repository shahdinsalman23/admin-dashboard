import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiSearch, BiSun, BiMoon, BiBell, BiChevronDown, BiUser, BiLogOut } from "react-icons/bi";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === "") return;
    alert(`Searching for: ${searchQuery}`); // 🔥 yahan API ya filter logic lagana
  };

  // Mobile check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dropdown outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Smooth animation (DOM remove delay)
  useEffect(() => {
    if (mobileSearchOpen) {
      setShowSearch(true);
    } else {
      const timer = setTimeout(() => setShowSearch(false), 250); // transition duration
      return () => clearTimeout(timer);
    }
  }, [mobileSearchOpen]);

  return (
    <header className="navbar-header">
      <Container fluid>
        <Row>
          <Col lg={8} md={5} sm={5} xs={5}>
            <div className="header-toggle-search">
              <button onClick={toggleSidebar}>☰</button>
              <div className="header-search">
                {/* Mobile search overlay */}
                {isMobile && showSearch && (
                  <div className={`mobile-search-overlay ${mobileSearchOpen ? "open" : ""}`}>
                    <input
                      type="text"
                      placeholder="Search..."
                      autoFocus
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    />
                    <button className="search-btn" onClick={handleSearch}>
                      <BiSearch size={18} />
                    </button>
                    <button className="close-search-btn" onClick={() => setMobileSearchOpen(false)}>
                      ✕
                    </button>
                  </div>
                )}

                {/* Desktop Search */}
                {!isMobile && (
                  <>
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    />
                    <span onClick={handleSearch}><BiSearch /></span>
                  </>
                )}

                {/* Mobile Search Icon (open overlay) */}
                {isMobile && !mobileSearchOpen && (
                  <span onClick={() => setMobileSearchOpen(true)}><BiSearch /></span>
                )}
              </div>
            </div>
          </Col>

          <Col lg={4} md={7} sm={7} xs={7}>
            <div className="header-end">
              <ul>
                <li onClick={toggleTheme}>
                  {theme === "light" ? <BiSun size={22} /> : <BiMoon size={22} />}
                </li>
                <li><BiBell size={22} /></li>

                {user ? (
                  <li className="profile-wrapper">
                    <div
                      className="header-profile"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <img
                        src={user.photoURL || "https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"}
                        alt="profile"
                        className="profile-img"
                      />
                      <span className="profile-name">{user.displayName || "User"}</span>
                      <BiChevronDown size={18} />
                    </div>

                    {dropdownOpen && (
                      <div className="profile-dropdown" ref={dropdownRef}>
                        <Link to="/profile" className="dropdown-item">
                          <BiUser /> Profile Settings
                        </Link>
                        <button className="dropdown-item" onClick={handleLogout}>
                          <BiLogOut /> Logout
                        </button>
                      </div>
                    )}
                  </li>
                ) : (
                  <li>
                    <Link to="/login" className="themebtn">Login</Link>
                  </li>
                )}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
