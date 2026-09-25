import { Container } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';
import { certificationData, educationData } from '../../../data/educationData';
import EducationCard from './education-card';
import './education.css';

function Education() {

    const { theme } = useContext(ThemeContext);
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
                                    />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Education
