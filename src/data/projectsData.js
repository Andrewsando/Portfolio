import ambvalent from '../../src/assets/webp/ambvalent.webp'
import nestifine from '../../src/assets/webp/nestifine.webp'
import spootchat from '../../src/assets/webp/spootchat.webp'
import gaming from '../../src/assets/webp/gaming.webp'



export const projectsData = [
    {
        id: 1,
        projectName: 'Nestifine',
        description: 'A unified platform for residential communities, HOAs, and short-term rentals',
        details: 'Brings property operations, resident communication, and community administration together in one streamlined digital experience.',
        tags: ['Property operations', 'Community management', 'Responsive platform'],
        link: "https://nestifine.com/",
        image: nestifine,
    },
    {
        id: 2,
        projectName: 'Ambvalent',
        description: 'Software engineering studio focused on scalable digital products, intelligent automation, and AI-powered solutions',
        details: 'A corporate experience designed to communicate the studio’s technical capabilities and connect businesses with its digital product services.',
        tags: ['Digital products', 'Automation', 'AI solutions'],
        link: "https://ambvalent.com/",
        image: ambvalent,

    },
    {
        id: 3,
        projectName: 'Spootchat',
        description: 'Platform to listen to music online with the possibility of chatting with artists or others interested in music',
        details: 'Combines music discovery with real-time social interaction so listeners can connect around artists and shared interests.',
        tags: ['React', 'Vue', 'Firebase', 'Vercel'],
        link: "https://spoot-chat-client.vercel.app/",
        image: spootchat,

    },
    {
        id: 4,
        projectName: 'Gaming',
        description: 'E-commerce platform for purchasing video games',
        details: 'A responsive storefront experience centered on browsing, discovering, and purchasing video games online.',
        tags: ['React', 'Firebase', 'Netlify', 'E-commerce'],
        image: gaming,
        link: "https://gaming-ecommerce.netlify.app/"
    }
]
