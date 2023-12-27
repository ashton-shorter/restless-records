import { useEffect, useState } from 'react';
// Routing
import { Route, Routes, useNavigate} from 'react-router-dom'
// Components
import Header from '../components/utility/header/Header';
import ProfileViewer from '../components/utility/profile-viewer/ProfileViewer';

import Profile from '../components/pages/profile/Profile';
import Home from '../components/pages/home/Home';
import Community from '../components/pages/community/Community';
import Events from '../components/pages/events/Events';
// Types
import { profile, profileManager,  profileViewerInfo, eventInfo, homeInfo, communityInfo, data, monthlyData, businessType, sort, businessInfo, eventsInfo, loginInfo, business, socialMedia } from '../components/definititon';
// Mock
import {EVENTS} from '../mock/events';
import {FEATURED_BUSINESSES} from '../mock/featuredBusinesses';
import {BUSINESSES} from '../mock/businesses';
// Playing Audio
import ReactPlayer from "react-player";
// Database
import {  collection, getDocs, doc, updateDoc, query, where, onSnapshot, setDoc } from "firebase/firestore";
import { db } from '../firebase';

type app = {
  login: loginInfo;
  home: homeInfo;
  community: communityInfo;
  businesses: businessInfo[];
  events: eventInfo[];
  eventsManager: eventsInfo;
  profiles: profile[];
  profileViewer: profileViewerInfo;
  displayProfile: boolean;
  song: string;
}

function App() {
  const navigate = useNavigate(); // Handle redirecting page
  let date = new Date();
  //const curMonth = date.toLocaleString('default', { month: 'long'}).toLowerCase();
  const year = date.getUTCFullYear();

  const sortedBusinesses = [...BUSINESSES].sort((a, b) =>
  a.profile.media[a.profile.media.length-1].likes.total
  - b.profile.media[b.profile.media.length-1].likes.total).reverse();

  const sortedEvents = [...EVENTS].sort((a, b) => a.date.getTime() - b.date.getTime());
  
  const [appState, setAppState] = useState<app>({
    login: {
      display: false,
      signUp: false,
      isLoggedIn: false,
      totalUsers: 0,
      business: {} as businessInfo
    },
    home: {
      nextEvent: sortedEvents[0],
      monthlyMusician: {
        name: 'Boots the Cat',
        email: 'bootsthecat@gmail.com',
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
    events: sortedEvents,
    eventsManager: {
      filteredEvents: sortedEvents,
      activeFilters: [],
      currentSearch: ''
    },
    profiles: [...FEATURED_BUSINESSES],
    profileViewer: {
      profile: {} as profile,
      isPlaying: false,
      mediaIndex: 0
    },
    displayProfile: false,
    song: ''
  })

  //#region Login
  const toggleDisplay = () => {
    setAppState({
      ...appState,
      login: {
        ...appState.login,
        display: !appState.login.display
      }
    })
  }

  const toggleSignUp = () => {
    setAppState({
      ...appState,
      login: {
        ...appState.login,
        signUp: !appState.login.signUp
      }
    })
  }

  const setIsLoggedIn = async (isLoggedIn: boolean, email: string) => {
    const updatedLogin = {...appState.login}
    
    appState.businesses.forEach(business => {
      if(business.profile.email) {
        if(business.profile.email == email) {
          console.log("Email matches " + business.profile.name);
          updatedLogin.business = {...business};
        }
      }
    })

    // const bussinessRef = collection(db, 'businesses');
    // onSnapshot(bussinessRef, (snapshot: any) => {
    //   snapshot.forEach((doc: any) => {
    //     const business = doc.data();
    //     // console.log({business});
    //     if(business.profile.email === email) {  // we only want to push it if it has media to display
    //       updatedLogin.business = {...business as businessInfo};
    //     }
    //   })
    // })

    updatedLogin.isLoggedIn = isLoggedIn;
    console.log({updatedLogin});

    setAppState({
      ...appState,
      login: { ...updatedLogin }
    })

    if(appState.login.signUp && isLoggedIn) {
      // immediately redirect to settings to configure account 
      return navigate('/profile');
    }

    if(!isLoggedIn) {
      // Toggle all displays off and redirect to home
      setAppState({
        ...appState,
        login: { ...appState.login, display: false, isLoggedIn: false, signUp: false}
      })
      return navigate('/');
    }
    
  }
  //#endregion Login

  //#region Database
  const findUser = (email: string) => {
    console.log("looking for email: " + email)
    console.log(appState.businesses);
    appState.businesses.forEach(business => {
      if(business.profile.email) {
        console.log("Has Email")
        console.log({business})
        if(business.profile.email == email) {
          console.log("Email matches " + business.profile.name);
          return business.profile.name;
        }
      }
    })
  }

  const getUsers = async () => {
    let updatedBusinesses = [] as businessInfo[];

    const bussinessRef = collection(db, 'businesses');
    onSnapshot(bussinessRef, (snapshot: any) => {
      snapshot.forEach((doc: any) => {
        const business = doc.data();
        // console.log({business});
        if(business.profile.media.length > 0) {  // we only want to push it if it has media to display
          updatedBusinesses.push(doc.data() as businessInfo);
        }
      })
    })

    const sortedBusinesses = updatedBusinesses.sort((a, b) =>
    a.profile.media[a.profile.media.length-1].likes.total
    - b.profile.media[b.profile.media.length-1].likes.total).reverse();

    setAppState({
      ...appState,
      login: {
        ...appState.login,
        totalUsers: updatedBusinesses.length  // update total users so when a new one signs up i have the correct ID
      },
      community: {
        ...appState.community,
        filteredBusinesses: sortedBusinesses
      },
      businesses: updatedBusinesses
    })
  }

  const getUserCount = (): number => {
    return appState.businesses.length;
  }

  const updateBusiness = async (updatedBusiness: businessInfo) => {
    console.log(updatedBusiness.id);
    const business = doc(db, "businesses", updatedBusiness.id); //updatedBusiness.profile.name);
    console.log({business});

    await setDoc(doc(db, "businesses", updatedBusiness.id), {
      ...updatedBusiness
    });
  }

  useEffect(() => {
    getUsers();
  }, [])
  //#endregion Database
  
  //#region Profile Settings
  const editBusiness = (updatedBusiness: businessInfo) => {
    let updatedBusinesses = [...appState.businesses];
    updatedBusinesses.forEach(business => {
      if(business.id === updatedBusiness.id) {
        console.log("Match found");
        business = {...updatedBusiness}
      }
    })

    setAppState({
      ...appState,
      login: {
        ...appState.login,
        business: updatedBusiness
      },
      businesses: updatedBusinesses
    })

    updateBusiness(updatedBusiness);
  }
  //#endregion Profile Settings

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
        updateBusiness({...business})
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
        updateBusiness({...business})
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

  const getFilters = (updatedFilters: string[]) => {
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
    activeFilters = getFilters(activeFilters) as businessType[];  // Get our filters(handle toggling)
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

  //#region Events
  const addEvent = (event: eventInfo) => {
    let updatedEvents = [...appState.eventsManager.filteredEvents];
    updatedEvents.push(event);

    setAppState({
      ...appState,
      eventsManager: {
        ...appState.eventsManager,
        filteredEvents: updatedEvents
      }
    });
  }

  const delEvent = (index: number) => {
    let updatedEvents = [...appState.eventsManager.filteredEvents];
    updatedEvents.splice(index, 1);

    setAppState({
      ...appState,
      eventsManager: {
        ...appState.eventsManager,
        filteredEvents: updatedEvents
      }
    });
  }

  const searchEvents = (phrase: string) => {
    phrase = phrase.toLowerCase();
    let foundEvents: eventInfo[] = [];
    appState.events.forEach(event => {
      const match = 
        event.name.toLowerCase().includes(phrase) ||
        event.company.toLowerCase().includes(phrase) ||
        event.musicians.forEach(musician => {
          musician.name.toLowerCase().includes(phrase)
        }) ||
        event.vendors.forEach(vendor => {
          vendor.name.toLowerCase().includes(phrase)
        }) ||
        event.venue.toLowerCase().includes(phrase) ||
        event.address.toLowerCase().includes(phrase);

      if(match) {
        foundEvents.push(...[event]);
      }
    })

    return foundEvents;
  }

  const filterEvents = (updatedFilters: string[], foundEvents: eventInfo[]) => {
    // Add any business that matches the active filters
    let filteredEvents: eventInfo[] = [];

    let hiring = false;
    let minors = false;
    let adults = false;

    if(updatedFilters.includes('hiring')) { hiring = true; }
    if(updatedFilters.includes('Age 18+')) { minors = true; adults = true }
    if(updatedFilters.includes('Age 21+')) { adults = true; }
    
    foundEvents.forEach(event => {
      const filterMatch = 
        event.hiring.length > 0 && hiring ||
        minors && event.ageRestriction && event.ageRestriction <= 18 ||
        adults && event.ageRestriction && event.ageRestriction >= 21;

      if(filterMatch) { filteredEvents.push({...event})}
    })

    return filteredEvents;
  };

  const updateEvents = (phrase?: string, updatedFilters?: string[]) => {
    const currentSearch = phrase ? phrase : '';
    let activeFilters = updatedFilters ? updatedFilters : appState.eventsManager.activeFilters;

    let foundEvents: eventInfo[] = currentSearch != '' ? searchEvents(currentSearch) : [...appState.events];

    activeFilters = getFilters(activeFilters);  // Get our filters(handle toggling)
    let filteredEvents: eventInfo[] = activeFilters.length > 0 ? filterEvents(activeFilters, foundEvents) : [...foundEvents];

    setAppState({
      ...appState,
      eventsManager: {
        ...appState.eventsManager,
        filteredEvents: filteredEvents
      }
    });
  }
  //#endregion Events

  //#region Props
  const headerProps = {info:{...appState.login}, toggleDisplay, toggleSignUp, setIsLoggedIn, getUserCount};
  const homeProps = {info:{...appState.home}, playSong, toggleProfile};
  const communityProps = {info: {...appState.community}, playSong, toggleProfile, addData, delData, updateFilteredBusinesses};
  const eventsProps = {info: {...appState.eventsManager}, toggleProfile, addEvent, delEvent, updateEvents};
  // const rentalProps = {};
  // const merchProps = {};
  // const blogProps = {};
  const profileProps = {business: {...appState.login.business} as businessInfo, editBusiness, playSong, addData, delData} as profileManager;

  const profileViewerProps = {info:{...appState.profileViewer}, setMediaIndex, toggleProfile, playSong, addData, delData};
  //#endregion Props
  return (
    <>
      <Header {...headerProps}/>
      <Routes>
        <Route path ='/' element={<Home {...homeProps}/>} />
        <Route path ='/community' element={<Community {...communityProps} />} />
        <Route path ='/events' element={<Events {...eventsProps} />} />
        {/* <Route path ='/rental' element={<Shop {...rentalProps} />} /> */}
        {/* <Route path ='/merch' element={<Shop {...merchProps} />} /> */}
        {/* <Route path ='/blog' element={<Blog {...blogProps} />} /> */}
        <Route path ='/profile' element={<Profile {...profileProps}/>} />
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

export default App;

