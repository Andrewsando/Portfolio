import React from 'react';
import './resume.css'



export default function ResumeUI() {

    return (
        <div>
            <h1 className='resumeTitle'>Resume</h1>
            <img src="/HV English.png" alt="resume" className='resumeImg' />
            <a
                href="/HV-English.pdf"
                download="Andres Torres - Resume.pdf"
                className='button'
            >
                Download Resume <span className='arrow'>→</span>
            </a>
        </div>
    )
}
