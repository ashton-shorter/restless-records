import { content, socialMedia, mediaInfo, monthlyData, data, businessType } from "../components/definititon";

const date = new Date("December 12, 2023");
const year = date.getUTCFullYear();

export const EVENTS = [
    {
        musicians: [
            {
                name: "Nostalgic 90's",
                email: '',
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
                ] as mediaInfo[],
                socialMedia: [
                    {
                      type: 'facebook',
                      url: ''
                    }, {
                        type: 'instagram',
                        url: ''
                    }, {
                        type: 'twitter',
                        url: ''
                    }, {
                        type: 'soundcloud',
                        url: ''
                    }, {
                        type: 'website',
                        url: ''
                    }, {
                        type: 'youtube',
                        url: ''
                    }, 
                ] as socialMedia[]
            },
            {
                name: 'Boots the Cat',
                email: 'bootsthecat@gmail.com',
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
            {
                name: 'Matty G',
                email: '',
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
            ] as mediaInfo[],
            socialMedia: [
                {
                  type: 'facebook',
                  url: ''
                }, {
                    type: 'instagram',
                    url: ''
                }, {
                    type: 'twitter',
                    url: ''
                }, {
                    type: 'soundcloud',
                    url: ''
                }, {
                    type: 'website',
                    url: ''
                }, {
                    type: 'youtube',
                    url: ''
                }, 
            ] as socialMedia[]},
            {
                name: 'Sound Elixir',
                email: '',
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
            ] as mediaInfo[],
            socialMedia: [
                {
                  type: 'facebook',
                  url: ''
                }, {
                    type: 'instagram',
                    url: ''
                }, {
                    type: 'twitter',
                    url: ''
                }, {
                    type: 'soundcloud',
                    url: ''
                }, {
                    type: 'website',
                    url: ''
                }, {
                    type: 'youtube',
                    url: ''
                }, 
            ] as socialMedia[]},
            {
                name: 'Death Market',
                email: '',
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
            ] as mediaInfo[],
            socialMedia: [
                {
                  type: 'facebook',
                  url: ''
                }, {
                    type: 'instagram',
                    url: ''
                }, {
                    type: 'twitter',
                    url: ''
                }, {
                    type: 'soundcloud',
                    url: ''
                }, {
                    type: 'website',
                    url: ''
                }, {
                    type: 'youtube',
                    url: ''
                }, 
            ] as socialMedia[]},
            {
                name:'Alexandria',
                email: '',
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
            ] as mediaInfo[],
            socialMedia: [
                {
                  type: 'facebook',
                  url: ''
                }, {
                    type: 'instagram',
                    url: ''
                }, {
                    type: 'twitter',
                    url: ''
                }, {
                    type: 'soundcloud',
                    url: ''
                }, {
                    type: 'website',
                    url: ''
                }, {
                    type: 'youtube',
                    url: ''
                }, 
            ] as socialMedia[]}
        ],
        vendors: [
            {
                name: "Molly's Mystical Creations",
                email: '',
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
            ] as mediaInfo[],
            socialMedia: [
                {
                  type: 'facebook',
                  url: ''
                }, {
                    type: 'instagram',
                    url: ''
                }, {
                    type: 'twitter',
                    url: ''
                }, {
                    type: 'soundcloud',
                    url: ''
                }, {
                    type: 'website',
                    url: ''
                }, {
                    type: 'youtube',
                    url: ''
                }, 
            ] as socialMedia[]},
            {
                name:'Kitchn Sink',
                email: '', 
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
            ] as mediaInfo[],
            socialMedia: [
                {
                  type: 'facebook',
                  url: ''
                }, {
                    type: 'instagram',
                    url: ''
                }, {
                    type: 'twitter',
                    url: ''
                }, {
                    type: 'soundcloud',
                    url: ''
                }, {
                    type: 'website',
                    url: ''
                }, {
                    type: 'youtube',
                    url: ''
                }, 
            ] as socialMedia[]},
            {
                name: "Hailey's Clothes",
                email: '',
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
            ] as mediaInfo[],
            socialMedia: [
                {
                  type: 'facebook',
                  url: ''
                }, {
                    type: 'instagram',
                    url: ''
                }, {
                    type: 'twitter',
                    url: ''
                }, {
                    type: 'soundcloud',
                    url: ''
                }, {
                    type: 'website',
                    url: ''
                }, {
                    type: 'youtube',
                    url: ''
                }, 
            ] as socialMedia[]},
            {
                name: 'Rise up sculptor',
                email: '',
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
            ] as mediaInfo[],
            socialMedia: [
                {
                  type: 'facebook',
                  url: ''
                }, {
                    type: 'instagram',
                    url: ''
                }, {
                    type: 'twitter',
                    url: ''
                }, {
                    type: 'soundcloud',
                    url: ''
                }, {
                    type: 'website',
                    url: ''
                }, {
                    type: 'youtube',
                    url: ''
                }, 
            ] as socialMedia[]}
        ],
        name: "Regenerate",
        company: "The Young Degenerates",
        bio: 'Local artists collaberate to bring you art, hip hop, and EDM.',
        image: '/images/events/eventBackdrop.PNG',

        venue: 'Boxcar X',
        address: '300N 509W',
        date: date,
        doors: 9,
        
        price: 20,
        paymentUrl: "https://square.link/u/hGWqA1wW",
        hiring: ['musician', 'vendor'] as businessType[],

        ageRestriction: 18
    },
    {
        musicians: [
            {
                name: "Super Future",
                email: '',
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
                ] as mediaInfo[],
                socialMedia: [
                    {
                      type: 'facebook',
                      url: ''
                    }, {
                        type: 'instagram',
                        url: ''
                    }, {
                        type: 'twitter',
                        url: ''
                    }, {
                        type: 'soundcloud',
                        url: ''
                    }, {
                        type: 'website',
                        url: ''
                    }, {
                        type: 'youtube',
                        url: ''
                    }, 
                ] as socialMedia[],
            }, {
                name: "Superave",
                email: '',
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
                ] as mediaInfo[],
                socialMedia: [
                    {
                      type: 'facebook',
                      url: ''
                    }, {
                        type: 'instagram',
                        url: ''
                    }, {
                        type: 'twitter',
                        url: ''
                    }, {
                        type: 'soundcloud',
                        url: ''
                    }, {
                        type: 'website',
                        url: ''
                    }, {
                        type: 'youtube',
                        url: ''
                    }, 
                ] as socialMedia[]
            }, {
                name: 'Boots the Cat',
                email: 'bootsthecat@gmail.com',
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
        ],
        vendors: [],
        name: "Energi Wednesday",
        company: "V2",
        bio: '',
        image: '',

        venue: 'Sky Bar',
        address: '149 Pierpont Ave. SLC',
        date: new Date("December 13, 2023"),
        doors: 9,

        price: 15,
        paymentUrl: "https://tickets.skyslc.com/e/energi-wednesdays-superave-super-future/tickets",
        hiring: [] as businessType[],

        ageRestriction: 21,
    }
]