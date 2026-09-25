import React, { useContext, useState } from "react";
import { projectsData } from "../../../data/projectsData"
import { ThemeContext } from '../../../contexts/theme-context';
import './projects-ui.css'

function ProjectsUI() {
    const { theme } = useContext(ThemeContext);
    const [expandedProject, setExpandedProject] = useState(null);

    return (
        <div className="container">
            <div>
                <h2 className="projectSectionTitle" style={{ color: theme.primary }}>Projects</h2>
                <div className="projectsContainer">
                    {projectsData.map((project) => {
                        const { id, projectName, description, details, tags, link, image } = project
                        const isExpanded = expandedProject === id;
                        const detailsId = `project-details-${id}`;

                        return (
                            <article key={id} className={`projectContainer${isExpanded ? ' expanded' : ''}`}>
                                <img
                                    src={image}
                                    alt={`${projectName} website preview`}
                                    className="projectImage"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <h3 className="projectTitle" style={{ color: theme.septenary }}>{projectName}</h3>
                                <p className="projectDescription" style={{ color: theme.primary }}>{description}</p>
                                <div
                                    id={detailsId}
                                    className={`projectDetails${isExpanded ? ' expanded' : ''}`}
                                    aria-hidden={!isExpanded}
                                >
                                    <div className="projectDetailsContent">
                                        <p>{details}</p>
                                        <ul aria-label={`${projectName} highlights`}>
                                            {tags.map((tag) => <li key={tag}>{tag}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div className="projectActions">
                                    <button
                                        type="button"
                                        aria-expanded={isExpanded}
                                        aria-controls={detailsId}
                                        onClick={() => setExpandedProject(isExpanded ? null : id)}
                                    >
                                        {isExpanded ? 'Hide details' : 'Explore details'}
                                        <span className="projectActionIcon" aria-hidden="true">+</span>
                                    </button>
                                    <a href={link} target="_blank" rel="noopener noreferrer">
                                        Visit project
                                    </a>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectsUI;