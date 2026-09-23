import React, { useEffect, useRef, useState } from 'react';
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
  const scrollAnimationFrame = useRef(null);

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

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 985px)');
    const handleDesktopLayout = ({ matches }) => {
      if (matches) {
        setIsOpen(false);
      }
    };

    handleDesktopLayout(desktopQuery);
    desktopQuery.addEventListener('change', handleDesktopLayout);

    return () => {
      desktopQuery.removeEventListener('change', handleDesktopLayout);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (scrollAnimationFrame.current) {
        window.cancelAnimationFrame(scrollAnimationFrame.current);
      }
    };
  }, []);

  const handleNavigation = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 100;
      const startPosition = window.scrollY;
      const distance = offsetPosition - startPosition;
      const duration = 900;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (scrollAnimationFrame.current) {
        window.cancelAnimationFrame(scrollAnimationFrame.current);
      }

      if (prefersReducedMotion) {
        window.scrollTo({ top: offsetPosition, behavior: 'instant' });
      } else {
        let startTime;

        const animateScroll = (timestamp) => {
          startTime ??= timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const easedProgress = progress < 0.5
            ? 4 * progress ** 3
            : 1 - ((-2 * progress + 2) ** 3) / 2;

          window.scrollTo({
            top: startPosition + distance * easedProgress,
            behavior: 'instant'
          });

          if (progress < 1) {
            scrollAnimationFrame.current = window.requestAnimationFrame(animateScroll);
          } else {
            scrollAnimationFrame.current = null;
          }
        };

        scrollAnimationFrame.current = window.requestAnimationFrame(animateScroll);
      }
    }

    setIsOpen(false);
  };

  return (
    <nav className={`lcr--navbar${isScrolled ? ' scrolled' : ''}${isOpen ? ' open' : ''}`} aria-label="Primary navigation">
      <div className="navbarHeader">
        <button
          type="button"
          className="navbarToggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <IoMenuOutline className="navbarMenuIcon" aria-hidden="true" />
          <IoCloseOutline className="navbarCloseIcon" aria-hidden="true" />
        </button>
      </div>
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
