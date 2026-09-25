import ambvalent from '../../src/assets/webp/ambvalent.webp'
import nestifine from '../../src/assets/webp/nestifine.webp'
import musubii from '../../src/assets/webp/musubii.webp'
import gaming from '../../src/assets/webp/gaming.webp'
import nestifineVideo from '../../src/assets/video/nestifine.webm'
import ambvalentVideo from '../../src/assets/video/ambvalent.webm'
import musubiiVideo from '../../src/assets/video/musubii.webm'
import gamingVideo from '../../src/assets/video/gaming.webm'



export const projectsData = [
    {
        id: 1,
        projectName: 'Nestifine',
        description: 'A unified platform for residential communities, HOAs, and short-term rentals',
        details: 'Brings property operations, resident communication, and community administration together in one streamlined digital experience.',
        stack: ['React', 'Vite', 'PWA', 'Responsive UI'],
        link: "https://nestifine.com/",
        image: nestifine,
        video: nestifineVideo,
    },
    {
        id: 2,
        projectName: 'Ambvalent',
        description: 'Software engineering studio focused on scalable digital products, intelligent automation, and AI-powered solutions',
        details: 'A corporate experience designed to communicate the studio’s technical capabilities and connect businesses with its digital product services.',
        stack: ['Next.js', 'React', 'Tailwind CSS'],
        link: "https://ambvalent.com/",
        image: ambvalent,
        video: ambvalentVideo,

    },
    {
        id: 3,
        projectName: 'Musubii',
        description: 'Online store for women’s clothing and accessories inspired by anime and Japanese culture',
        details: 'A responsive e-commerce experience with themed collections, product discovery, favorites, search, shopping cart, and nationwide delivery in Colombia.',
        stack: ['Next.js', 'React', 'Tailwind CSS', 'Cloudflare'],
        link: "https://dev.musubii.com.co/",
        image: musubii,
        video: musubiiVideo,

    },
    {
        id: 4,
        projectName: 'Gaming',
        description: 'E-commerce platform for purchasing video games',
        details: 'A responsive storefront experience centered on browsing, discovering, and purchasing video games online.',
        stack: ['React', 'Firebase', 'Netlify', 'CSS'],
        image: gaming,
        video: gamingVideo,
        link: "https://gaming-ecommerce.netlify.app/"
    }
]
