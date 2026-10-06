import React, { useState } from 'react';
import './resume.css'



export default function ResumeUI() {
    const [language, setLanguage] = useState('en');
    const isSpanish = language === 'es';
    const resumeAsset = isSpanish
        ? '/Andres-Torres-Desarrollador-Frontend-CV'
        : '/Andres-Torres-Frontend-Developer-Resume';
    const downloadName = isSpanish
        ? 'Andrés Torres - Currículum Desarrollador Frontend.pdf'
        : 'Andres Torres - Frontend Developer Resume.pdf';

    return (
        <div>
            <h1 className='resumeTitle'>{isSpanish ? 'Currículum' : 'Resume'}</h1>
            <div
                className="resumeLanguage"
                role="group"
                aria-label={isSpanish ? 'Idioma del currículum' : 'Resume language'}
            >
                <button
                    type="button"
                    className={language === 'en' ? 'resumeLanguageOption is-active' : 'resumeLanguageOption'}
                    aria-pressed={language === 'en'}
                    onClick={() => setLanguage('en')}
                >
                    <span>English</span>
                </button>
                <button
                    type="button"
                    className={language === 'es' ? 'resumeLanguageOption is-active' : 'resumeLanguageOption'}
                    aria-pressed={language === 'es'}
                    onClick={() => setLanguage('es')}
                >
                    <span>Español</span>
                </button>
            </div>
            <img
                key={language}
                src={`${resumeAsset}.webp`}
                alt={isSpanish ? 'Vista previa del currículum de Andrés Torres' : 'Andrés Torres resume preview'}
                className='resumeImg'
                loading="lazy"
                decoding="async"
            />
            <a
                href={`${resumeAsset}.pdf`}
                download={downloadName}
                className='button'
            >
                {isSpanish ? 'Descargar currículum' : 'Download Resume'} <span className='arrow'>→</span>
            </a>
        </div>
    )
}
