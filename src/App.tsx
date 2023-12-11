import { useState } from 'react';
// Routing
import { Route, Routes} from 'react-router-dom'
// Components
import Header from '../components/utility/header/Header';
import ProfileViewer from '../components/utility/profile-viewer/ProfileViewer';

import Home from '../components/pages/home/Home';
import Community from '../components/pages/community/Community';
// Types
import { profile, profileViewerInfo, eventInfo, homeInfo, communityInfo, data, monthlyData, businessType, sort, businessInfo } from '../components/definititon';
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
  businesses: businessInfo[];
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

  const sortedBusinesses = [...BUSINESSES].sort((a, b) =>
  a.profile.media[a.profile.media.length-1].likes.total
  - b.profile.media[b.profile.media.length-1].likes.total).reverse();
  
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
      filteredBusinesses: [...sortedBusinesses],
      allFilters: ['artist', 'musician', 'performer', 'vendor', 'bartender', 'security', 'stagehand'],
      activeFilters: [],
      currentSearch: '',
      sortBy: 'likes'
    },
    businesses: [...BUSINESSES],
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
      appState.businesses.forEach(business => {
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
    let updatedBusinesses = [...appState.businesses];
    updatedBusinesses.forEach(business => {
      if(business.profile.name == profile.name) {
        console.log("match found: " + business.profile.name);
        business.profile.media[mediaIndex].likes.total++;
      }
    })

    setAppState({
      ...appState,
        businesses: updatedBusinesses
    })
  }

  const delData = (profile: profile, mediaIndex: number) => {
    console.log("UnLiking media: " + mediaIndex + " for: " + profile.name);
    let updatedBusinesses = [...appState.businesses];
    updatedBusinesses.forEach(business => {
      if(business.profile.name == profile.name) {
        console.log("match found: " + business.profile.name);
        business.profile.media[mediaIndex].likes.total--;
      }
    })

    setAppState({
      ...appState,
        businesses: updatedBusinesses
    })
  }
  //#endregion Likes & Views

  //#region Community
  const filterBy = (updatedFilters: businessType[], foundBusinesses: businessInfo[]) => {
    // Add any business that matches the active filters
    let filteredBusinesses: businessInfo[] = [];
    
    foundBusinesses.forEach(business => {
      const filterMatch = business.types.filter(match => updatedFilters.includes(match)); // Do any business types match the active filters?
      if(filterMatch.length > 0) {  // If so,
        filteredBusinesses.push(business);   // Add it
      }
    })

    return filteredBusinesses;
  };

  const getFilters = (updatedFilters: businessType[]) => {
    if(updatedFilters.length > 0) {  // Ensure there are filters active
      updatedFilters.forEach(filter => { // Take a look at each filter
        if(updatedFilters.filter(match => match === filter).length > 1) { // Does any filter occur more than once?
          updatedFilters = updatedFilters.filter(match => match !== filter) // Return a new filter array excluding the duplicate filter
        }
      })
    }

    return updatedFilters;
  }
  
  const sortBusinesses = (updatedSort: sort, filteredBusinesses: businessInfo[]) => {
    let sortedBusinesses: businessInfo[] = [];
    if(updatedSort === 'likes') {
      sortedBusinesses = filteredBusinesses.sort((a, b) =>
        a.profile.media[a.profile.media.length-1].likes.total
        - b.profile.media[b.profile.media.length-1].likes.total).reverse();
    }

    if(updatedSort === 'newest')  {
      sortedBusinesses = filteredBusinesses.sort((a, b) => a.profile.media[0].dateCreated.getTime() - b.profile.media[0].dateCreated.getTime()).reverse();
    }

    if(updatedSort === 'oldest')  {
      sortedBusinesses = filteredBusinesses.sort((a, b) => a.profile.media[0].dateCreated.getTime() - b.profile.media[0].dateCreated.getTime());
    }

    return sortedBusinesses;
  };

  const searchFor = (phrase: string) => {
    let foundBusinesses: businessInfo[] = [];
    appState.businesses.forEach(business => {
      // Compare each business name to the search phrase
      const match = business.profile.name.toLowerCase().includes(phrase.toLowerCase());
      if(match) { // if it matches send it through
          foundBusinesses.push(business);
      }
    })
    
    return foundBusinesses;
  }

  const updateFilteredBusinesses = (phrase?: string, updatedFilters?: businessType[], updatedSort?: sort) => {
    // Compare all filtered arrays and return one new array
    // Starting with searchResults, then filters, then sort for efficiency's sake
    const currentSearch = phrase ? phrase : '';
    let activeFilters = updatedFilters ? updatedFilters : appState.community.activeFilters;
    const sortBy = updatedSort ? updatedSort : appState.community.sortBy;

    // Search for any phrase currently in our search bar
    let foundBusinesses: businessInfo[] = currentSearch != '' ? searchFor(currentSearch) : [...appState.businesses];

    // Filter it
    activeFilters = getFilters(activeFilters);  // Get our filters(handle toggling)
    // if there are no filters make sure we display everything, otherwise, filter it
    let filteredBusinesses: businessInfo[] = activeFilters.length > 0 ? filterBy(activeFilters, foundBusinesses) : [...foundBusinesses];
    
    // Now sort it
    let sortedBusinesses: businessInfo[] = sortBusinesses(sortBy, filteredBusinesses);

    setAppState({
      ...appState,
      community: {
        ...appState.community,
        filteredBusinesses: sortedBusinesses,
        activeFilters: activeFilters,
        currentSearch: currentSearch,
        sortBy: sortBy
      }
    })
  }
  //#endregion Community

  //#region Props
  const homeProps = {info:{...appState.home}, playSong, toggleProfile};
  const communityProps = {info: {...appState.community}, playSong, toggleProfile, addData, delData, updateFilteredBusinesses};
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
