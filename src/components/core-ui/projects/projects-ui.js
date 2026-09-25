import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { projectsData } from "../../../data/projectsData"
import { ThemeContext } from '../../../contexts/theme-context';
import './projects-ui.css'

function ProjectsUI() {
    const { theme } = useContext(ThemeContext);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const closeButtonRef = useRef(null);
    const closeTimerRef = useRef(null);
    const isClosingRef = useRef(false);
    const triggerRef = useRef(null);

    const closeProject = useCallback(() => {
        if (isClosingRef.current) return;

        isClosingRef.current = true;
        setIsClosing(true);

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        closeTimerRef.current = window.setTimeout(() => {
            setSelectedProject(null);
            setIsClosing(false);
            isClosingRef.current = false;
        }, prefersReducedMotion ? 0 : 360);
    }, []);

    useEffect(() => {
        if (!selectedProject) return undefined;

        const previousOverflow = document.body.style.overflow;
        const previousPaddingRight = document.body.style.paddingRight;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const bodyPaddingRight = parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${bodyPaddingRight + scrollbarWidth}px`;
        }
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeProject();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.body.style.paddingRight = previousPaddingRight;
            window.removeEventListener('keydown', handleKeyDown);
            triggerRef.current?.focus();
        };
    }, [closeProject, selectedProject]);

    useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

    const openProject = (project, event) => {
        window.clearTimeout(closeTimerRef.current);
        isClosingRef.current = false;
        setIsClosing(false);
        triggerRef.current = event.currentTarget;
        setSelectedProject(project);
    };

    return (
        <div className="projectsSection">
            <div>
                <h2 className="projectSectionTitle" style={{ color: theme.primary }}>Projects</h2>
                <div className="projectsContainer">
                    {projectsData.map((project) => {
                        const { id, projectName, description, link, image } = project

                        return (
                            <article key={id} className="projectContainer">
                                <img
                                    src={image}
                                    alt={`${projectName} website preview`}
                                    className="projectImage"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <h3 className="projectTitle" style={{ color: theme.septenary }}>{projectName}</h3>
                                <p className="projectDescription" style={{ color: theme.primary }}>{description}</p>
                                <div className="projectActions">
                                    <button
                                        type="button"
                                        onClick={(event) => openProject(project, event)}
                                        aria-haspopup="dialog"
                                    >
                                        View details <span aria-hidden="true">→</span>
                                    </button>
                                    <a href={link} target="_blank" rel="noopener noreferrer">
                                        Visit project <span aria-hidden="true">↗</span>
                                    </a>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
            {selectedProject && createPortal(
                <div
                    className={`projectModalBackdrop${isClosing ? ' projectModalBackdrop--closing' : ''}`}
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) closeProject();
                    }}
                >
                    <section
                        className={`projectModal${isClosing ? ' projectModal--closing' : ''}`}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                    >
                        <button
                            ref={closeButtonRef}
                            type="button"
                            className="projectModalClose"
                            aria-label="Close project details"
                            onClick={closeProject}
                        >
                            ×
                        </button>
                        <video
                            key={selectedProject.id}
                            className="projectModalMedia"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            poster={selectedProject.image}
                            aria-label={`${selectedProject.projectName} website interaction preview`}
                        >
                            <source src={selectedProject.video} type="video/webm" />
                        </video>
                        <div className="projectModalContent">
                            <div className="projectModalHeading">
                                <h3 id="project-modal-title">{selectedProject.projectName}</h3>
                                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                                    Visit project <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                            <p>{selectedProject.description}</p>
                            <p className="projectModalDetails">{selectedProject.details}</p>
                            <p className="projectModalStackTitle">Stack used</p>
                            <ul aria-label={`${selectedProject.projectName} technology stack`}>
                                {selectedProject.stack.map((technology) => <li key={technology}>{technology}</li>)}
                            </ul>
                        </div>
                    </section>
                </div>,
                document.body
            )}
        </div>
    )
}

export default ProjectsUI;