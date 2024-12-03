import React from 'react';
import './resume.css'



export default function ResumeUI() {

    return (
        <div>
            <h1 className='resumeTitle'>Resume</h1>
            <a href="HV-English.pdf" download="Andres Torres - Resume" target="_blank" rel="noreferrer">
            </a>
            <img src="/HV English.png" alt="resume" className='resumeImg' />
            <a href="HV-English.pdf" download="Andres Torres - Resume" target="_blank" rel="noreferrer">
                <button className='button'>Donwload Resume <span className='arrow'>→</span></button>
            </a>
        </div>
    )
}

