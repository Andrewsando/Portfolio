import coderhouseCertificate from '../assets/webp/certificates/coderhouse.webp';
import soyHenryCertificate from '../assets/webp/certificates/soyhenry.webp';
import uandesCertificate from '../assets/webp/certificates/uandes.webp';

export const educationData = [
    {
        id: 1,
        institution: 'Universidad Jorge Tadeo Lozano',
        course: 'Fullstack web development',
        startYear: '2025',
        endYear: '2025'
    },
    {
        id: 2,
        institution: 'Universidad Politécnico Grancolombiano',
        course: '(BBA) Bachelor of Business Management',
        startYear: '2016',
        endYear: '2020'
    },
]

export const certificationData = [
    {
        id: 1,
        institution: 'Universidad de los Andes',
        course: 'Frontend web development with HTML, CSS & JavaScript',
        startYear: '2026',
        endYear: '2026',
        preview: uandesCertificate,
        file: '/certificates/andres-torres-uandes-certificate.pdf',
        downloadName: 'Andres Torres - Universidad de los Andes Certificate.pdf'
    },
    {
        id: 2,
        institution: 'SoyHenry',
        course: 'Web development',
        startYear: '2023',
        endYear: '2023',
        preview: soyHenryCertificate,
        file: '/certificates/andres-torres-soyhenry-certificate.pdf',
        downloadName: 'Andres Torres - SoyHenry Certificate.pdf'
    },
    {
        id: 3,
        institution: 'Coderhouse',
        course: 'Web development',
        startYear: '2022',
        endYear: '2022',
        preview: coderhouseCertificate,
        file: '/certificates/andres-torres-coderhouse-certificate.png',
        downloadName: 'Andres Torres - Coderhouse Certificate.png'
    },
]