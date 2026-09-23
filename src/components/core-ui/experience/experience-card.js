import React, { useContext, useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import Fade from 'react-reveal/Fade';
import expImgBlack from '../../../assets/svg/experience/expImgBlack.svg';
import { ThemeContext } from '../../../contexts/theme-context';
import './experience.css';

function ExperienceCard({ id, company, jobtitle, startYear, endYear, achievements }) {
    const { theme } = useContext(ThemeContext);
    const [isExpanded, setIsExpanded] = useState(false);
    const achievementsId = `experience-achievements-${id}`;

    return (
        <Fade bottom>
            <article className={`experience-entry${isExpanded ? ' expanded' : ''}`}>
                <button
                    type="button"
                    className="experience-card"
                    aria-expanded={isExpanded}
                    aria-controls={achievementsId}
                    onClick={() => setIsExpanded((expanded) => !expanded)}
                >
                    <div className="expcard-img" style={{backgroundColor: theme.secondary}}>
                        <img src={expImgBlack} alt="" />
                    </div>
                    <div className="experience-details">
                        <h4 style={{color: theme.septenary}}>{jobtitle}</h4>
                        <div className="experience-meta">
                            <h5 style={{color: theme.primary}}>{company}</h5>
                            <span style={{color: theme.primary}}>{startYear} — {endYear}</span>
                        </div>
                    </div>
                    <span className={`experience-chevron${isExpanded ? ' expanded' : ''}`} aria-hidden="true">
                        <IoChevronDownOutline />
                    </span>
                </button>
                <div id={achievementsId} className="experience-achievements" hidden={!isExpanded}>
                    <ul>
                        {achievements.map((achievement) => (
                            <li key={achievement}>{achievement}</li>
                        ))}
                    </ul>
                </div>
            </article>
        </Fade>   
    )
}

export default ExperienceCard;
