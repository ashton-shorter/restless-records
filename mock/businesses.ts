import { content, socialMedia, mediaInfo, monthlyData, data, businessType, businessInfo } from "../components/definititon";

const date = new Date();
const year = date.getUTCFullYear();

const oldDate = new Date('July 1, 1999, 12:00:00');

export const BUSINESSES: businessInfo[] = [
    {
        profile: {
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
            ] as mediaInfo[]
        },
        views: {
            total: 0,
            history: [{
                year: year,
                monthlyData: {} as monthlyData
            }]
        } as data,
        types: ['musician'] as businessType[],
        eventsWorked: 0,
        upcomingEvents: ['regenerate']
    },
    {
        profile: {
            name: 'Boots the Cat',
            picture: 'images/artist-logos/boots-the-cat.jpeg',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            media: [
                {
                    index: 0,
                    dateCreated: oldDate,
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
                    dateCreated: oldDate,
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
        views: {
            total: 0,
            history: [{
                year: year,
                monthlyData: {} as monthlyData
            }]
        } as data,
        types: ['musician'] as businessType[],
        eventsWorked: 0,
        upcomingEvents: ['regenerate']
    },
    {
        profile: {
            name: 'Matty G',
            media: [{
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
            }] as mediaInfo[]
        },
        views: {
            total: 0,
            history: [{
                year: year,
                monthlyData: {} as monthlyData
            }]
        } as data,
        types: ['musician'] as businessType[],
        eventsWorked: 0,
        upcomingEvents: ['regenerate']
    }, {
        profile: {
            name: 'Sound Elixir',
            media: [{
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
            }] as mediaInfo[]
        },
        views: {
            total: 0,
            history: [{
                year: year,
                monthlyData: {} as monthlyData
            }]
        } as data,
        types: ['musician'] as businessType[],
        eventsWorked: 0,
        upcomingEvents: ['regenerate']
    }, {
        profile: {
            name: 'Death Market',
            media: [{
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
            }] as mediaInfo[]
        },
        views: {
            total: 0,
            history: [{
                year: year,
                monthlyData: {} as monthlyData
            }]
        } as data,
        types: ['musician'] as businessType[],
        eventsWorked: 0,
        upcomingEvents: ['regenerate']
    }, {
        profile: {
            name: 'Alexandria',
            media: [{
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
            }] as mediaInfo[]
        },
        views: {
            total: 0,
            history: [{
                year: year,
                monthlyData: {} as monthlyData
            }]
        } as data,
        types: ['musician'] as businessType[],
        eventsWorked: 0,
        upcomingEvents: ['regenerate']
    }, {
        profile: {
            name: "Molly's Mystical Creations",
            media: [{
                index: 0,
                dateCreated: date,
                type: 'image' as content,
                url: 'images/artist-logos/sleepy-eyes.png',
                isPlaying: false,
                likes: {
                    total: 0,
                    history: [{
                        year: year,
                        monthlyData: {} as monthlyData
                    }]
                } as data
            }] as mediaInfo[]
        },
        views: {
            total: 0,
            history: [{
                year: year,
                monthlyData: {} as monthlyData
            }]
        } as data,
        types: ['vendor'] as businessType[],
        eventsWorked: 0,
        upcomingEvents: ['regenerate']
    }, {
        profile: {
            name: "Kitchn Sink",
            media: [{
                index: 0,
                dateCreated: date,
                type: 'image' as content,
                url: 'images/artist-logos/sleepy-eyes.png',
                isPlaying: false,
                likes: {
                    total: 0,
                    history: [{
                        year: year,
                        monthlyData: {} as monthlyData
                    }]
                } as data
            }] as mediaInfo[]
        },
        views: {
            total: 0,
            history: [{
                year: year,
                monthlyData: {} as monthlyData
            }]
        } as data,
        types: ['vendor'] as businessType[],
        eventsWorked: 0,
        upcomingEvents: ['regenerate']
    }, {
        profile: {
            name: "Hailey's Clothes",
            media: [{
                index: 0,
                dateCreated: date,
                type: 'image' as content,
                url: 'images/artist-logos/sleepy-eyes.png',
                isPlaying: false,
                likes: {
                    total: 0,
                    history: [{
                        year: year,
                        monthlyData: {} as monthlyData
                    }]
                } as data
            }] as mediaInfo[]
        },
        views: {
            total: 0,
            history: [{
                year: year,
                monthlyData: {} as monthlyData
            }]
        } as data,
        types: ['vendor'] as businessType[],
        eventsWorked: 0,
        upcomingEvents: ['regenerate']
    }, {
        profile: {
            name: "Rise Up Sculptor",
            media: [{
                index: 0,
                dateCreated: date,
                type: 'image' as content,
                url: 'images/artist-logos/sleepy-eyes.png',
                isPlaying: false,
                likes: {
                    total: 0,
                    history: [{
                        year: year,
                        monthlyData: {} as monthlyData
                    }]
                } as data
            }] as mediaInfo[]
        },
        views: {
            total: 0,
            history: [{
                year: year,
                monthlyData: {} as monthlyData
            }]
        } as data,
        types: ['vendor'] as businessType[],
        eventsWorked: 0,
        upcomingEvents: ['regenerate']
    }
];