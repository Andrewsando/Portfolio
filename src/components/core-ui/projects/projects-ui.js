import React, { useContext } from "react";
import { projectsData } from "../../../data/projectsData"
import { ThemeContext } from '../../../contexts/theme-context';
import './projects-ui.css'

function ProjectsUI() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="container">
            <div>
                <h1 className="projecSectionTitle" style={{ color: theme.primary }}>Projects</h1>
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