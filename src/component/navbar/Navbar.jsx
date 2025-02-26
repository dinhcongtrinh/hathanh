import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/imgs/HathanhLogo.png';
import './navbar.css';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);


  const navigate = useNavigate();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = useCallback(() => {
    setNavActive(false);
    setProductDropdownOpen(false);
    setServiceDropdownOpen(false);
  }, []);

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!productDropdownOpen);
    setServiceDropdownOpen(false); // Close other dropdown
  };

  const toggleServiceDropdown = () => {
    setServiceDropdownOpen(!serviceDropdownOpen);
    setProductDropdownOpen(false); // Close other dropdown
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [closeMenu]);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, [closeMenu]);

  useEffect(() => {
    setShowNavbar(true);
  }, []);
  

  const handleNavClick = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <nav
      
      className={`navbar navbar-expand-lg w-100 ${showNavbar ? 'show' : 'hide'}`}
      style={{ backgroundColor: '#509d46', transition: 'top 0.3s' }}
    >
      <div className="container">
      <Link className="navbar-brand" to="/Home">
        <img 
          src={Logo} 
          alt="Company Logo" 
          className="logo-navbar d-inline-block align-text-top"
        />
      </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Home">
                Trang Chủ
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sản Phẩm
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/action">
                    Thiết bị văn phòng
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    Giải pháp tài nguyên môi trường
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/something-else">
                    Phát triển công nghệ
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/New">
                Thông Tin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/RegistrationForm">
                Đăng ký
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactPage">
                Liên Hệ
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
