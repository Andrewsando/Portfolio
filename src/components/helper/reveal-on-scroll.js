import React, { useEffect, useRef, useState } from 'react';
import './reveal-on-scroll.css';

function RevealOnScroll({ children, className = '' }) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            setIsVisible(true);
            return undefined;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.05 });

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className={`revealOnScroll${isVisible ? ' revealOnScroll--visible' : ''}${className ? ` ${className}` : ''}`}
        >
            {children}
        </div>
    );
}

export default RevealOnScroll;
