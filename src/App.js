import React from 'react';
import Navbar from './component/navbar/Navbar';
import { HashRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './view/Home/home';
import New from './view/New/new';
import Footer from './component/Footer/footer';
import ContactPage from './view/Contact/contact.jsx';
import RegistrationForm from './view/ContactForm/RegistrationForm.jsx';  
import '@fortawesome/fontawesome-free/css/all.min.css';


import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
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
    </>
  );
}

export default App;
