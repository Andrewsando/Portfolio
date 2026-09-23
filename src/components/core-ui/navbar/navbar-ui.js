import React, { useEffect, useState } from 'react';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import './navbar.css';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
];

function NavbarUI() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 100;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }

    setIsOpen(false);
  };

  return (
    <nav className={`lcr--navbar${isScrolled ? ' scrolled' : ''}${isOpen ? ' open' : ''}`} aria-label="Primary navigation">
      <button
        type="button"
        className="navbarToggle"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{isOpen ? 'Close' : 'Menu'}</span>
        {isOpen ? <IoCloseOutline aria-hidden="true" /> : <IoMenuOutline aria-hidden="true" />}
      </button>
      <ul id="primary-navigation">
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} onClick={(event) => handleNavigation(event, id)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavbarUI;
