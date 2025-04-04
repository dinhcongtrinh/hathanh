import { useEffect } from 'react';
import Navbar from './component/navbar/Navbar';
import { HashRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './view/Home/home';
import New from './view/New/new';
import Footer from './component/Footer/footer';
import ContactPage from './view/Contact/contact.jsx';
import CompanyPolicy from './view/Support/CompanyPolicy.jsx';
// import RegistrationForm from './view/ContactForm/RegistrationForm.jsx';  
import AboutCompany from './component/navbar/aboutcompany/AboutCompany.jsx';
import OverviewPage from './component/navbar/overview/OverviewPage.jsx';
// import '@fortawesome/fontawesome-free/css/all.min.css';
 
function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `url('/nen-web-csht.jpg')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';

    return () => {
      document.body.style.backgroundImage = ''; // Xóa ảnh nền khi component unmount
    };
  }, []);

  return (
    <HashRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/companypolicy" element={<CompanyPolicy />} />
          <Route path='/overviewPage' element={<OverviewPage/>}/>
          <Route path='/aboutCompany' element={<AboutCompany/>}/>
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}


export default App;