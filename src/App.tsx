import { useState } from 'react';
// Routing
import { Route, Routes} from 'react-router-dom'
// Components
import Header from '../components/utility/header/Header';
import ProfileViewer from '../components/utility/profile-viewer/ProfileViewer';

import Home from '../components/pages/home/Home';
import Community from '../components/pages/community/Community';
// Types
import { profile, profileViewerInfo, eventInfo, homeInfo, communityInfo, data, monthlyData } from '../components/definititon';
// Mock
import {EVENTS} from '../mock/events';
import {FEATURED_BUSINESSES} from '../mock/featuredBusinesses';
import {BUSINESSES} from '../mock/businesses';
// Playing Audio
// Audio playing
import ReactPlayer from "react-player";

type app = {
  home: homeInfo;
  community: communityInfo;
  events: eventInfo[];
  profiles: profile[];
  profileViewer: profileViewerInfo;
  displayProfile: boolean;
  song: string;
}

function App() {
  let date = new Date();
  //const curMonth = date.toLocaleString('default', { month: 'long'}).toLowerCase();
  const year = date.getUTCFullYear();
  
  const [appState, setAppState] = useState<app>({
    home: {
      nextEvent: EVENTS[0],
      monthlyMusician: {
        name: 'Boots the Cat',
        picture: 'images/artist-logos/boots-the-cat.jpeg',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        media: [
            {
                index: 0,
                dateCreated: date,
                type: 'song',
                url: 'https://soundcloud.com/carwozab/boots-the-cat-vol-2',
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
                type: 'song',
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
        ],
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
      featuredBusinesses: [...FEATURED_BUSINESSES] 
    },
    community: {
      businesses: [...BUSINESSES],
      filters: [],
      sortBy: 'likes'
    },
    events: [...EVENTS],
    profiles: [...FEATURED_BUSINESSES],
    profileViewer: {
      profile: {} as profile,
      isPlaying: false,
      mediaIndex: 0
    },
    displayProfile: false,
    song: ''
  })

  //#region Profile Viewer
  // Toggles the profile viewer display with the given profile
  const toggleProfile = (profile?: profile) => {
    let targetProfile = {} as profile;

    // Correctly associate the profile with the database as to update all references of it
    if(profile) {
      appState.community.businesses.forEach(business => {
        if(business.profile.name == profile.name) {
          targetProfile = {...business.profile}
        }
      })
    }

    setAppState({
      ...appState,
      profileViewer: {
        ...appState.profileViewer,
        profile: targetProfile  // if no profile was passed in, just reset it
      },
      displayProfile: !appState.displayProfile,
    })
  }

  // Handles stepping through the profile's media
  const setMediaIndex = (index: number) => {
    const media = appState.profileViewer.profile.media;
    // Is the index within bounds?
    if(media && index < media.length && index > -1) {
      setAppState({
        ...appState,
        profileViewer: {
          ...appState.profileViewer,
          mediaIndex: index
        }
      })
    }
  }
  //#endregion Profile Viewer

  //#region Playing Songs
  const playSong = (url: string, profile: profile, mediaIndex: number) => {
    resetIsPlaying(profile, mediaIndex);
    let updatedProfiles = [...appState.profiles];
    updatedProfiles.forEach(p => {
      if(p.name == profile.name) {  // Find the matching profile by name
        console.log("match found: " + p.name);
        if(profile.media) { // Does this profile have any media?
          console.log("Playing song: " + url);
          const curProfile = profile.media[mediaIndex];
          curProfile.isPlaying = !curProfile.isPlaying; // toggle isPlaying on the given profile
        }
      }
    })

    setAppState({
      ...appState,
      profiles: updatedProfiles,
      song: url // Set app song to play
    })
  }

  // Stop all musicians from playing their record
  const resetIsPlaying = (profile: profile, mediaIndex: number) => {
    let updatedProfiles = stopPlaying([...appState.profiles], profile, mediaIndex);
    let updatedFeaturedBusinesses = stopPlaying([...appState.home.featuredBusinesses], profile, mediaIndex);

    let updatedMonthlyMusician = {...appState.home.monthlyMusician};
    if(updatedMonthlyMusician.media) {
      updatedMonthlyMusician.media.forEach((m, i) => {
        if(i != mediaIndex) {
          m.isPlaying = false;
        }
      })
    }

    setAppState({
      ...appState,
      home: {
        ...appState.home,
        monthlyMusician: updatedMonthlyMusician,
        featuredBusinesses: updatedFeaturedBusinesses
      },
      profiles: updatedProfiles,
    })
  }

  const stopPlaying = (profileArray: profile[], profile: profile, mediaIndex: number) => {
    profileArray.forEach(p => {
      if(p.name === profile.name) {
        if(p.media) {
          p.media.forEach((m, i )=> {
            if(i != mediaIndex) {
              m.isPlaying = false;
            }
          })
        }
      }
      if(p.name !== profile.name && p.media) { // Does this profile have any media?
        p.media.forEach(m => {
          m.isPlaying = false;
        })
      }
    })

    return profileArray;
  }
  //#endregion Playing Songs

  //#region Likes & Views
  const addData = (profile: profile, mediaIndex: number) => {
    console.log("Liking media: " + mediaIndex + " for: " + profile.name);
    let updatedBusinesses = [...appState.community.businesses];
    updatedBusinesses.forEach(business => {
      if(business.profile.name == profile.name) {
        console.log("match found: " + business.profile.name);
        business.profile.media[mediaIndex].likes.total++;
      }
    })

    setAppState({
      ...appState,
      community: {
        ...appState.community,
        businesses: updatedBusinesses
      }
    })
  }

  const delData = (profile: profile, mediaIndex: number) => {
    console.log("UnLiking media: " + mediaIndex + " for: " + profile.name);
    let updatedBusinesses = [...appState.community.businesses];
    updatedBusinesses.forEach(business => {
      if(business.profile.name == profile.name) {
        console.log("match found: " + business.profile.name);
        business.profile.media[mediaIndex].likes.total--;
      }
    })

    setAppState({
      ...appState,
      community: {
        ...appState.community,
        businesses: updatedBusinesses
      }
    })
  }
  //#endregion Likes & Views

  //#region Props
  const homeProps = {info:{...appState.home}, playSong, toggleProfile};
  const communityProps = {info: {...appState.community}, playSong, toggleProfile, addData, delData};
  // const eventsProps = {};
  // const rentalProps = {};
  // const merchProps = {};
  // const blogProps = {};
  // const profileProps = {};

  const profileViewerProps = {info:{...appState.profileViewer}, setMediaIndex, toggleProfile, playSong, addData, delData};
  //#endregion Props
  return (
    <>
      <Header />
      <Routes>
        <Route path ='/' element={<Home {...homeProps}/>} />
        <Route path ='/community' element={<Community {...communityProps} />} />
        {/* <Route path ='/events' element={<Events {...eventsProps} />} /> */}
        {/* <Route path ='/rental' element={<Shop {...rentalProps} />} /> */}
        {/* <Route path ='/merch' element={<Shop {...merchProps} />} /> */}
        {/* <Route path ='/blog' element={<Blog {...blogProps} />} /> */}
        {/* <Route path ='/profile' element={<Profile {...profileProps}/>} /> */}
      </Routes>
      
      { appState.displayProfile ? (
          <ProfileViewer {...profileViewerProps} />
        ) : null
      }

      { appState.song !== '' ? (
        <ReactPlayer
          config= {{  // override soundcloud api options
            soundcloud: {
              options: {auto_play: 'true'}
            }
          }}
          playsinline
          height={100}
          width={window.innerWidth}
          style={{position: 'fixed', bottom: '-20px', right: '0px', zIndex: '500'}}
          url={appState.song + '?show_teaser=false'}  // disable teaser prompt to listen in browser or app
          playing={true}
        />
       ): null
      }
    </>
  )
}

export default App
