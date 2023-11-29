import { useState } from 'react';
// Routing
import { Route, Routes} from 'react-router-dom'
// Components
import Header from '../components/utility/header/Header';

function App() {
  const [appState, setAppState] = useState({});

  //#region Props
  const homeProps = {};
  const talentProps = {};
  const staffProps = {};
  const eventsProps = {};
  const rentalProps = {};
  const merchProps = {};
  const blogProps = {};
  const profileProps = {};
  //#endregion Props
  return (
    <>
      <Header />
      {/* <Routes> */}
        {/* <Route path ='/' element={<Home {...homeProps}/>} /> */}
        {/* <Route path ='/talent' element={<Businesses {...talentProps} />} /> */}
        {/* <Route path ='/staff' element={<Businesses {...staffProps} />} /> */}
        {/* <Route path ='/events' element={<Events {...eventsProps} />} /> */}
        {/* <Route path ='/rental' element={<Shop {...rentalProps} />} /> */}
        {/* <Route path ='/merch' element={<Shop {...merchProps} />} /> */}
        {/* <Route path ='/blog' element={<Blog {...blogProps} />} /> */}
        {/* <Route path ='/profile' element={<Profile {...profileProps}/>} /> */}
      {/* </Routes> */}
    </>
  )
}

export default App
