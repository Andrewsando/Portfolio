import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';
import { skillsData } from '../../../data/skillsData';
import { skillsImage } from '../../../utils/skillsImage';
import './skills.css';

function Skills() {
    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.quaternary
    }

    return (
        <div className="skills" style={{ backgroundColor: theme.secondary }}>
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skillsGrid">
                    {skillsData.map(({ category, skills }) => (
                        <section className="skillCategory" key={category}>
                            <h3 style={{ color: theme.septenary }}>{category}</h3>
                            <div className="skillList">
                                {skills.map((skill) => {
                                    const icon = skillsImage(skill);

                                    return (
                                        <div className="skill--box" key={skill} style={skillBoxStyle}>
                                            {icon ? (
                                                <img
                                                    src={icon}
                                                    alt=""
                                                    aria-hidden="true"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            ) : (
                                                <span className="skillIconFallback" aria-hidden="true">{skill}</span>
                                            )}
                                            <span style={{ color: theme.primary }}>
                                                {skill}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
