import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';
import { skillsData } from '../../../data/skillsData';
import { skillsImage } from '../../../utils/skillsImage';
import RevealOnScroll from '../../helper/reveal-on-scroll';
import './skills.css';

function Skills() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="skills">
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>
            <RevealOnScroll className="skillsContainer">
                <div className="skillsGrid">
                    {skillsData.map(({ category, skills }) => (
                        <section className="skillCategory" key={category}>
                            <h3 style={{ color: theme.septenary }}>{category}</h3>
                            <div className="skillList">
                                {skills.map((skill) => {
                                    const icon = skillsImage(skill);

                                    return (
                                        <div className="skill--box" key={skill}>
                                            <span className="skillIcon" aria-hidden="true">
                                                {icon ? (
                                                    <img
                                                        src={icon}
                                                        alt=""
                                                        loading="lazy"
                                                        decoding="async"
                                                    />
                                                ) : (
                                                    <span className="skillIconFallback">{skill}</span>
                                                )}
                                            </span>
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
            </RevealOnScroll>
        </div>
    )
}

export default Skills
