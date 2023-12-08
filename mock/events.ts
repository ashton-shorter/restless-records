import { content, socialMedia, mediaInfo, monthlyData, data } from "../components/definititon";

const date = new Date();
const year = date.getUTCFullYear();

export const EVENTS = [
    {
        musicians: [
            {
                name: "Nostalgic 90's",
                media: [
                    {
                        index: 0,
                        dateCreated: date,
                        type: 'song' as content,
                        url: 'https://soundcloud.com/carwozab/sets/boots-the-cat-3-0',
                        isPlaying: false,
                        likes: {
                            total: 0,
                            history: [{
                                year: year,
                                monthlyData: {} as monthlyData
                            }]
                        } as data
                    }
                ] as mediaInfo[],},
            {
                name: 'Boots the Cat',
                picture: 'images/artist-logos/boots-the-cat.jpeg',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                media: [
                    {
                        index: 0,
                        dateCreated: date,
                        type: 'song' as content,
                        url: 'https://soundcloud.com/carwozab/sets/boots-the-cat-3-0',
                        isPlaying: false,
                        likes: {
                            total: 0,
                            history: [{
                                year: year,
                                monthlyData: {} as monthlyData
                            }]
                        } as data
                    }, {
                        index: 1,
                        dateCreated: date,
                        type: 'song' as content,
                        url: 'https://soundcloud.com/carwozab/boots-the-cat-vol-2',
                        isPlaying: false,
                        likes: {
                            total: 0,
                            history: [{
                                year: year,
                                monthlyData: {} as monthlyData
                            }]
                        } as data
                    }, 
                ] as mediaInfo[],
                socialMedia: [
                    {
                        type: 'facebook',
                        url: 'https://soundcloud.com/carwozab'
                    }, {
                        type: 'instagram',
                        url: 'https://soundcloud.com/carwozab'
                    }, {
                        type: 'twitter',
                        url: 'https://soundcloud.com/carwozab'
                    }, {
                        type: 'soundcloud',
                        url: 'https://soundcloud.com/carwozab'
                    }, {
                        type: 'website',
                        url: 'https://soundcloud.com/carwozab'
                    }, {
                        type: 'youtube',
                        url: 'https://soundcloud.com/carwozab'
                    }, 
                ] as socialMedia[]
            },
            {name: 'Matty G', media: [
                {
                    index: 0,
                    dateCreated: date,
                    type: 'song' as content,
                    url: 'https://soundcloud.com/carwozab/sets/boots-the-cat-3-0',
                    isPlaying: false,
                    likes: {
                        total: 0,
                        history: [{
                            year: year,
                            monthlyData: {} as monthlyData
                        }]
                    } as data
                }
            ] as mediaInfo[]},
            {name: 'Sound Elixir', media: [
                {
                    index: 0,
                    dateCreated: date,
                    type: 'song' as content,
                    url: 'https://soundcloud.com/carwozab/sets/boots-the-cat-3-0',
                    isPlaying: false,
                    likes: {
                        total: 0,
                        history: [{
                            year: year,
                            monthlyData: {} as monthlyData
                        }]
                    } as data
                }
            ] as mediaInfo[]},
            {name: 'Death Market', media: [
                {
                    index: 0,
                    dateCreated: date,
                    type: 'song' as content,
                    url: 'https://soundcloud.com/carwozab/sets/boots-the-cat-3-0',
                    isPlaying: false,
                    likes: {
                        total: 0,
                        history: [{
                            year: year,
                            monthlyData: {} as monthlyData
                        }]
                    } as data
                }
            ] as mediaInfo[]},
            {name: 'Alexandria', media: [
                {
                    index: 0,
                    dateCreated: date,
                    type: 'song' as content,
                    url: 'https://soundcloud.com/carwozab/sets/boots-the-cat-3-0',
                    isPlaying: false,
                    likes: {
                        total: 0,
                        history: [{
                            year: year,
                            monthlyData: {} as monthlyData
                        }]
                    } as data
                }
            ] as mediaInfo[]}
        ],
        vendors: [
            {name: "Molly's Mystical Creations", media: [
                {
                    index: 0,
                    dateCreated: date,
                    type: 'song' as content,
                    url: 'https://soundcloud.com/carwozab/sets/boots-the-cat-3-0',
                    isPlaying: false,
                    likes: {
                        total: 0,
                        history: [{
                            year: year,
                            monthlyData: {} as monthlyData
                        }]
                    } as data
                }
            ] as mediaInfo[]},
            {name: 'Kitchn Sink', media: [
                {
                    index: 0,
                    dateCreated: date,
                    type: 'song' as content,
                    url: 'https://soundcloud.com/carwozab/sets/boots-the-cat-3-0',
                    isPlaying: false,
                    likes: {
                        total: 0,
                        history: [{
                            year: year,
                            monthlyData: {} as monthlyData
                        }]
                    } as data
                }
            ] as mediaInfo[]},
            {name: "Hailey's Clothes", media: [
                {
                    index: 0,
                    dateCreated: date,
                    type: 'song' as content,
                    url: 'https://soundcloud.com/carwozab/sets/boots-the-cat-3-0',
                    isPlaying: false,
                    likes: {
                        total: 0,
                        history: [{
                            year: year,
                            monthlyData: {} as monthlyData
                        }]
                    } as data
                }
            ] as mediaInfo[]},
            {name: 'Rise up sculptor', media: [
                {
                    index: 0,
                    dateCreated: date,
                    type: 'song' as content,
                    url: 'https://soundcloud.com/carwozab/sets/boots-the-cat-3-0',
                    isPlaying: false,
                    likes: {
                        total: 0,
                        history: [{
                            year: year,
                            monthlyData: {} as monthlyData
                        }]
                    } as data
                }
            ] as mediaInfo[]}
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