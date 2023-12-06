import { content, socialMedia, mediaInfo } from "../components/definititon";

let date = new Date();
export const EVENTS = [
    {
        musicians: [
            {name: "Nostalgic 90's"},
            {
                name: 'Boots the Cat',
                picture: 'images/artist-logos/boots-the-cat.jpeg',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                media: [
                    {
                        index: 0,
                        dateCreated: date,
                        type: 'song' as content,
                        url: 'https://soundcloud.com/carwozab/boots-the-cat-vol-2',
                        isPlaying: false,
                        profile: {name: 'Boots the Cat'}
                    }, {
                        index: 1,
                        dateCreated: date,
                        type: 'song' as content,
                        url: 'https://soundcloud.com/carwozab/boots-the-cat-vol-2',
                        isPlaying: false,
                        profile: {name: 'Boots the Cat'}
                    }, 
                ] as mediaInfo[],
                socialMedia: [
                    {
                        type: 'facebook',
                        url: 'https://facebook.com'
                    }, {
                        type: 'soundcloud',
                        url: 'https://soundcloud.com/carwozab'
                    }, 
                ] as socialMedia[]
            },
            {name: 'Matty G'},
            {name: 'Sound Elixir'},
            {name: 'Death Market'},
            {name: 'Alexandria'}
        ],
        vendors: [
            {name: "Molly's Mystical Creations"},
            {name: 'Kitchn Sink'},
            {name: "Hailey's Clothes"},
            {name: 'Rise up sculptor'}
        ],
        name: "Regenerate",
        subTitle: "Presented By The Young Degenerates",
        bio: 'Local artists collaberate to bring you art, hip hop, and EDM.',
        image: '/images/eventBackdrop.PNG',

        venue: 'Boxcar X',
        address: '300N 509W',
        date: date,
        doors: 9,
        
        price: 20,
        paymentUrl: "https://square.link/u/hGWqA1wW",
        hiring: []
    }
]