import React, { useEffect } from 'react';
import Navbar from './component/navbar/Navbar';
import { useNavigate, Routes, Route } from 'react-router-dom';  // ❌ Xóa Router, chỉ giữ Routes và Route
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './view/Home/home';
import New from './view/New/new';
import Footer from './component/Footer/footer';
import ContactPage from './view/Contact/contact.jsx';
import RegistrationForm from './view/ContactForm/RegistrationForm.jsx';  

import './App.css';

function App() {
  const navigate = useNavigate();

useEffect(() => {
  if (window.location.pathname === "/") {
    navigate("/");
  }
}, [navigate]);

  return (
    <>
      <div className="App">
        <Navbar />
        {/* Các thành phần khác của ứng dụng */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/contactpage" element={<ContactPage />} />
            <Route path="/registrationform" element={<RegistrationForm />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
      <Footer />
      {/* Đặt Footer ngoài .App để không bị giới hạn chiều rộng */}
    </>
  );
}

export default App;

