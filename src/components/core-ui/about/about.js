import React, { useContext } from 'react';
import { Container } from '@mui/material';
import { ThemeContext } from '../../../contexts/theme-context';
import { aboutData } from '../../../data/aboutData';
import './about.css';
import { Link } from 'react-router-dom';

function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div id="about">
            <Container className="about" >
                <div className="about-body">
                    <div className="about-description">
                        <h2 id="about" style={{ color: theme.primary }}>{aboutData.title}</h2>
                        <p style={{ color: theme.septenary }}>{aboutData.description1}</p>
                        <Link to="/resume" className="resumeLink">See resume <span className='aboutArrow'>→</span></Link>
                        <Link to="/contact" className="resumeLink">Contact <span className='aboutArrow'>→</span></Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;
