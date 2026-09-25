import { Container } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';
import { experienceData } from '../../../data/experienceData';
import ExperienceCard from './experience-card';
import './experience.css';

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (
        <div>
            <Container className="experience">
                <div className="experience-body">
                    <div className="experience-description">
                        <h2 style={{ color: theme.primary }}>Experience</h2>
                        {experienceData.map(exp => (
                            <ExperienceCard
                                key={exp.id}
                                id={exp.id}
                                jobtitle={exp.jobtitle}
                                company={exp.company}
                                startYear={exp.startYear}
                                endYear={exp.endYear}
                                achievements={exp.achievements}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Experience
