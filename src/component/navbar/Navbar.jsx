import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/imgs/HathanhLogo.png';
import './navbar.css';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'home' hoặc 'products'
  const [showNavbar, setShowNavbar] = useState(false);

  const navigate = useNavigate();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = useCallback(() => {
    setNavActive(false);
    setActiveDropdown(null);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  // Hàm để mở dropdown theo mục (home hoặc products)
  const handleDropdown = (menu) => {
    setActiveDropdown(menu);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg w-100 ${showNavbar ? 'show' : 'hide'}`}
      style={{ backgroundColor: 'rgb(172 233 165)', transition: 'top 0.3s' }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/Home" onClick={closeMenu}>
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
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Menu "Trang Chủ" với submenu */}
            <li 
              className="nav-item dropdown menu-item" 
              onMouseEnter={() => handleDropdown('home')} 
              onMouseLeave={() => handleDropdown(null)}
            >
              <Link className="nav-link" to="/Home">
                Trang Chủ
              </Link>
              {activeDropdown === 'home' && (
                <ul className="submenu">
                  <li>
                    <Link className="submenu-item" to="/home/overview">
                      Tổng Quan
                    </Link>
                  </li>
                  <li>
                    <Link className="submenu-item" to="/home/company">
                      Giới Thiệu Công Ty
                    </Link>
                  </li>
                  <li>
                    <Link className="submenu-item" to="/home/leadership">
                      Ban Lãnh Đạo
                    </Link>
                  </li>
                  <li>
                    <Link className="submenu-item" to="/home/social">
                      Trách Nhiệm Xã Hội
                    </Link>
                  </li>
                  <li>
                    <Link className="submenu-item" to="/home/economy">
                      Thúc Đẩy Kinh Tế
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Menu "Sản Phẩm" với submenu */}
            <li 
              className="nav-item dropdown menu-item" 
              onMouseEnter={() => handleDropdown('products')} 
              onMouseLeave={() => handleDropdown(null)}
            >
              <Link className="nav-link" to="/products">
                Sản Phẩm
              </Link>
              {activeDropdown === 'products' && (
                <ul className="submenu">
                  <li>
                    <Link className="submenu-item" to="/products/office-equipment">
                      Thiết bị văn phòng
                    </Link>
                  </li>
                  <li>
                    <Link className="submenu-item" to="/products/environment">
                      Giải pháp tài nguyên môi trường
                    </Link>
                  </li>
                  <li>
                    <Link className="submenu-item" to="/products/technology">
                      Phát triển công nghệ
                    </Link>
                  </li>
                </ul>
              )}
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
