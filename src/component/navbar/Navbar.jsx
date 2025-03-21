import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imgs/HathanhLogo.png';
import './navbar.css';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const [showNavbar, setShowNavbar] = useState(false);
  
  const hideTimeout = useRef(null);

 

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = useCallback(() => {
    setNavActive(false);
    setActiveDropdown(null);
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
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

  // const handleNavClick = (path) => {
  //   navigate(path);
  //   closeMenu();
  // };

  // Xử lý khi di chuột vào mục có dropdown, hủy timeout nếu có và hiển thị dropdown
  const handleMouseEnterDropdown = (menu) => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setActiveDropdown(menu);
  };

  // Khi di chuột ra, đặt timeout 300ms trước khi ẩn dropdown
  const handleMouseLeaveDropdown = () => {
    hideTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg w-100 ${showNavbar ? 'show' : 'hide'}`}
      style={{ backgroundColor: '#ffffffff', transition: 'top 0.3s' }}
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
            {/* Menu "Trang Chủ" với dropdown sử dụng delay */}
            <li 
              className="nav-item dropdown menu-item" 
              onMouseEnter={() => handleMouseEnterDropdown('home')} 
              onMouseLeave={handleMouseLeaveDropdown}
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
                  <li>
                    <Link className="submenu-item" to="/home/economy">
                      Thực trạng môi trường
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Menu "Sản Phẩm" với dropdown sử dụng delay */}
            <li 
              className="nav-item dropdown menu-item" 
              onMouseEnter={() => handleMouseEnterDropdown('products')} 
              onMouseLeave={handleMouseLeaveDropdown}
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
              <Link className="nav-link" to="/companypolicy">
                Hỗ Trợ
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
