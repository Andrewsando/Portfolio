import ambvalent from '../../src/assets/png/ambvalent.png'
import nestifine from '../../src/assets/png/nestifine.png'
import spootchat from '../../src/assets/png/spootchat.png'
import gaming from '../../src/assets/png/gaming.png'



export const projectsData = [
    {
        id: 1,
        projectName: 'Nestifine',
        description: 'A unified platform for residential communities, HOAs, and short-term rentals',
        link: "https://nestifine.com/",
        image: nestifine,
    },
    {
        id: 2,
        projectName: 'Ambvalent',
        description: 'Software engineering studio focused on scalable digital products, intelligent automation, and AI-powered solutions',
        link: "https://ambvalent.com/",
        image: ambvalent,

    },
    {
        id: 3,
        projectName: 'Spootchat',
        description: 'Platform to listen to music online with the possibility of chatting with artists or others interested in music',
        tags: ['React', 'Vercel', 'Vue', 'Firebase', 'etc'],
        link: "https://spoot-chat-client.vercel.app/",
        image: spootchat,

    },
    {
        id: 4,
        projectName: 'Gaming',
        description: 'E-commerce platform for purchasing video games',
        tags: ['React', 'Vercel', 'Vue', 'Firebase', 'etc'],
        image: gaming,
        link: "https://gaming-ecommerce.netlify.app/"
    }
]
