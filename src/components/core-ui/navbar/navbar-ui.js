import React, { useEffect } from 'react';
import './navbar.css';

function NavbarUI() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offsetPosition = targetElement.offsetTop - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    };

    const navLinks = document.querySelectorAll('.lcr--navbar a');
    navLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div id='navbar' className='lcr--navbar'>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
      </ul>
    </div>
  );
}

export default NavbarUI;
