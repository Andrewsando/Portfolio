import React from 'react';
import './resume.css'



export default function ResumeUI() {

    return (
        <div>
            <h1 className='resumeTitle'>Resume</h1>
            <img
                src="/Andres-Torres-Frontend-Developer-Resume.webp"
                alt="Andres Torres resume preview"
                className='resumeImg'
                loading="lazy"
                decoding="async"
            />
            <a
                href="/Andres-Torres-Frontend-Developer-Resume.pdf"
                download="Andres Torres - Frontend Developer Resume.pdf"
                className='button'
            >
                Download Resume <span className='arrow'>→</span>
            </a>
        </div>
    )
}
