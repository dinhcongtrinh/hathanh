import Navbar from './component/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './view/Home/home';
import New from './view/New/new';
import Footer from './component/Footer/footer';
import ContactPage from './view/Contact/contact.jsx';
import RegistrationForm from './view/ContactForm/RegistrationForm.jsx';  

import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        {/* Các thành phần khác của ứng dụng */}
        <main>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/New" element={<New />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/RegistrationForm" element={< RegistrationForm />} />
          </Routes>
        </main>
      </div>
      {/* Đặt Footer ngoài .App để không bị giới hạn chiều rộng */}
      <Footer />
    </>
  );
}

export default App;
