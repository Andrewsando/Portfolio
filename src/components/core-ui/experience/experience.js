import { Container } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';
import { experienceData } from '../../../data/experienceData';
import ExperienceCard from './experience-card';
import './experience.css';

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (
        <div id="experience" style={{ backgroundColor: theme.secondary }}>
            <Container className="experience" id="experience">
                <div className="experience-body">
                    <div className="experience-description">
                        <h1 style={{ color: theme.primary }}>Experience</h1>
                        {experienceData.map(exp => (
                            <ExperienceCard
                                key={exp.id}
                                id={exp.id}
                                jobtitle={exp.jobtitle}
                                company={exp.company}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Experience
