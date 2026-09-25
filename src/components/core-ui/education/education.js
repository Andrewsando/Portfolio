import { Container } from '@mui/material';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ThemeContext } from '../../../contexts/theme-context';
import { certificationData, educationData } from '../../../data/educationData';
import EducationCard from './education-card';
import './education.css';

function Education() {

    const { theme } = useContext(ThemeContext);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const closeButtonRef = useRef(null);
    const closeTimerRef = useRef(null);
    const isClosingRef = useRef(false);
    const triggerRef = useRef(null);

    const closeCertificate = useCallback(() => {
        if (isClosingRef.current) return;

        isClosingRef.current = true;
        setIsClosing(true);

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        closeTimerRef.current = window.setTimeout(() => {
            setSelectedCertificate(null);
            setIsClosing(false);
            isClosingRef.current = false;
        }, prefersReducedMotion ? 0 : 320);
    }, []);

    useEffect(() => {
        if (!selectedCertificate) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeCertificate();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
            triggerRef.current?.focus();
        };
    }, [closeCertificate, selectedCertificate]);

    useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

    const openCertificate = (certificate, event) => {
        triggerRef.current = event.currentTarget;
        setSelectedCertificate(certificate);
    };

    return (
        <div>
            <Container className="education">
                <div className="education-body">
                    <div className="education-description">
                        <h2 style={{ color: theme.primary }}>Education</h2>
                        <div className="education-list">
                            {educationData.map(edu => (
                                <EducationCard
                                    key={edu.id}
                                    institution={edu.institution}
                                    course={edu.course}
                                    startYear={edu.startYear}
                                    endYear={edu.endYear}
                                />
                            ))}
                        </div>
                        <section className="certifications" aria-labelledby="certifications-title">
                            <h3 id="certifications-title" style={{ color: theme.primary }}>Certifications</h3>
                            <div className="certification-grid">
                                {certificationData.map(certification => (
                                    <EducationCard
                                        key={certification.id}
                                        institution={certification.institution}
                                        course={certification.course}
                                        startYear={certification.startYear}
                                        endYear={certification.endYear}
                                        compact
                                        onClick={(event) => openCertificate(certification, event)}
                                    />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </Container>
            {selectedCertificate && createPortal(
                <div
                    className={`certificateModalBackdrop${isClosing ? ' certificateModalBackdrop--closing' : ''}`}
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) closeCertificate();
                    }}
                >
                    <section
                        className={`certificateModal${isClosing ? ' certificateModal--closing' : ''}`}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="certificate-modal-title"
                    >
                        <button
                            ref={closeButtonRef}
                            type="button"
                            className="certificateModalClose"
                            aria-label="Close certificate"
                            onClick={closeCertificate}
                        >
                            ×
                        </button>
                        <div className="certificateModalHeader">
                            <div>
                                <p>Certificate · {selectedCertificate.endYear}</p>
                                <h3 id="certificate-modal-title">{selectedCertificate.course}</h3>
                                <span>{selectedCertificate.institution}</span>
                            </div>
                            <a
                                href={selectedCertificate.file}
                                download={selectedCertificate.downloadName}
                            >
                                Download <span aria-hidden="true">↓</span>
                            </a>
                        </div>
                        <div className="certificateModalPreview">
                            <img
                                src={selectedCertificate.preview}
                                alt={`${selectedCertificate.course} certificate from ${selectedCertificate.institution}`}
                            />
                        </div>
                    </section>
                </div>,
                document.body
            )}
        </div>
    )
}

export default Education
