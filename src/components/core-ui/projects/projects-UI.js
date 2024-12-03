import React, { useContext } from "react";
import { projectsData } from "../../../data/projectsData"
import { ThemeContext } from '../../../contexts/theme-context';
import './projects-ui.css'

function ProjectsUI() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="container">
            <div>
                <h1 className="projecSectionTitle" id="projects" style={{ color: theme.primary }}>Projects</h1>
                <div className="projectsContainer">
                    {projectsData.map((project) => {
                        const { id, projectName, description, link, image } = project
                        return (
                            <a href={link}>
                                <div key={id} className="projectContainer">
                                    <img src={image} alt={projectName} className="projectImage" />

                                    <h3 className="projectTitle" style={{ color: theme.septenary }}>{projectName}</h3>
                                    <h3 className="projectDescription" style={{ color: theme.primary }}>{description}</h3>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectsUI;