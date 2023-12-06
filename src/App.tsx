import { useState } from 'react';
// Routing
import { Route, Routes} from 'react-router-dom'
// Components
import Header from '../components/utility/header/Header';
import ProfileViewer from '../components/utility/profile-viewer/ProfileViewer';

import Home from '../components/pages/home/Home';
// Types
import { profile, profileViewerInfo, eventInfo, homeInfo } from '../components/definititon';
// Mock
import {EVENTS} from '../mock/events';
import {FEATURED_BUSINESSES} from '../mock/featuredBusinesses';

type app = {
  home: homeInfo;
  events: eventInfo[];
  profiles: profile[];
  profileViewer: profileViewerInfo;
  displayProfile: boolean;
  song: string;
}

function App() {
  let date = new Date();
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
                profile: { name: 'Boots the Cat' } as profile,
            }, {
                index: 1,
                dateCreated: date,
                type: 'song',
                url: 'https://soundcloud.com/carwozab/boots-the-cat-vol-2',
                isPlaying: false,
                profile: { name: 'Boots the Cat' } as profile,
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
    events: [...EVENTS],
    profiles: [{name: 'Boots the Cat'}, {name: 'Sleepy Eyes'}, {name: 'Trippy Hippy'}],
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
    setAppState({
      ...appState,
      profileViewer: {
        ...appState.profileViewer,
        profile: profile ? profile : {} as profile  // if no profile was passed in, just reset it
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
  //#endregion Playing Songs

  //#region Props
  const homeProps = {info:{...appState.home}, playSong, toggleProfile};
  // const talentProps = {};
  // const staffProps = {};
  // const eventsProps = {};
  // const rentalProps = {};
  // const merchProps = {};
  // const blogProps = {};
  // const profileProps = {};

  const profileViewerProps = {info:{...appState.profileViewer}, setMediaIndex, toggleProfile, playSong};
  //#endregion Props
  return (
    <>
      <Header />
      <Routes>
        <Route path ='/' element={<Home {...homeProps}/>} />
        {/* <Route path ='/talent' element={<Businesses {...talentProps} />} /> */}
        {/* <Route path ='/staff' element={<Businesses {...staffProps} />} /> */}
        {/* <Route path ='/events' element={<Events {...eventsProps} />} /> */}
        {/* <Route path ='/rental' element={<Shop {...rentalProps} />} /> */}
        {/* <Route path ='/merch' element={<Shop {...merchProps} />} /> */}
        {/* <Route path ='/blog' element={<Blog {...blogProps} />} /> */}
        {/* <Route path ='/profile' element={<Profile {...profileProps}/>} /> */}
      </Routes>
      {
        appState.displayProfile ? (
          <ProfileViewer {...profileViewerProps} />
        ) : null
      }
    </>
  )
}

export default App
