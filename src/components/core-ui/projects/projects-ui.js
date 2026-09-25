import React, { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { projectsData } from "../../../data/projectsData"
import { ThemeContext } from '../../../contexts/theme-context';
import './projects-ui.css'

function ProjectsUI() {
    const { theme } = useContext(ThemeContext);
    const [selectedProject, setSelectedProject] = useState(null);
    const closeButtonRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        if (!selectedProject) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setSelectedProject(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
            triggerRef.current?.focus();
        };
    }, [selectedProject]);

    const openProject = (project, event) => {
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
                    className="projectModalBackdrop"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) setSelectedProject(null);
                    }}
                >
                    <section
                        className="projectModal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                    >
                        <button
                            ref={closeButtonRef}
                            type="button"
                            className="projectModalClose"
                            aria-label="Close project details"
                            onClick={() => setSelectedProject(null)}
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
                            <h3 id="project-modal-title">{selectedProject.projectName}</h3>
                            <p>{selectedProject.description}</p>
                            <p className="projectModalDetails">{selectedProject.details}</p>
                            <p className="projectModalStackTitle">Stack used</p>
                            <ul aria-label={`${selectedProject.projectName} technology stack`}>
                                {selectedProject.stack.map((technology) => <li key={technology}>{technology}</li>)}
                            </ul>
                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                                Visit project <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </section>
                </div>,
                document.body
            )}
        </div>
    )
}

export default ProjectsUI;