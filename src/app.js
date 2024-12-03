import React, { useContext } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './contexts/theme-context';
import { Contact, HomePage, Resume } from './pages';
import BackToTop from './components/helper/back-to-top/back-to-top';
import ScrollToTop from './components/helper/scroll-to-top';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './app.css';
import RedirectToSection from './utils/redirectToSection';


function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.secondary, height: '100%', minHeight: '100vh' }}>
      
      <Router>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/resume" element={<Resume />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/section/:id" element={<RedirectToSection />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
