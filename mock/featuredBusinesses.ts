import { content, data, mediaInfo, monthlyData, profile, socialMedia } from '../components/definititon';
const date = new Date();
const year = date.getUTCFullYear();
export const FEATURED_BUSINESSES: profile[] = [
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
        name: 'Trippy Hippy',
        picture: "images/artist-logos/hooskii.jpg",
        bio: '10$/m',
        media: [
            {
                index: 0,
                dateCreated: date,
                type: 'song' as content,
                url: 'https://soundcloud.com/user-475831211/burning-man-2022',
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
                url: 'https://facebook.com'
            }, {
                type: 'soundcloud',
                url: 'https://soundcloud.com/carwozab'
            }, 
        ]
    },  
    {
        name: 'Sleepy Eyes',
        picture: "images/artist-logos/sleepy-eyes.png",
        bio: '10$/m',
        media: [
            {
                index: 0,
                dateCreated: date,
                type: 'song' as content,
                url: 'https://soundcloud.com/eyesleepy/acidtv002-mp3',
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
                url: 'https://facebook.com'
            }, {
                type: 'soundcloud',
                url: 'https://soundcloud.com/carwozab'
            }, 
        ]
    } 
]