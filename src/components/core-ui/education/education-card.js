import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import eduImgBlack from '../../../assets/svg/education/eduImgBlack.svg';
import { ThemeContext } from '../../../contexts/theme-context';
import './education.css';

function EducationCard({ institution, course, startYear, endYear, compact = false }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard: {
            backgroundColor: theme.quaternary,
        },
    }));

    const classes = useStyles();
    const dateRange = startYear === endYear ? startYear : `${startYear}-${endYear}`;

    return (
        <Fade bottom>
            <div className={`education-card${compact ? ' certification-card' : ''} ${classes.educationCard}`} >
                <div className="educard-img" style={{ backgroundColor: theme.secondary }}>
                    <img src={eduImgBlack} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{ color: theme.septenary }}>{dateRange}</h6>
                    <h4 style={{ color: theme.septenary }}>{course}</h4>
                    <h5 style={{ color: theme.primary }}>{institution}</h5>
                </div>
            </div>
        </Fade>
    )
}

export default EducationCard
