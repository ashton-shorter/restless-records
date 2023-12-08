import './styles.scss';

// Components
import Banner from '../../utility/banner/Banner';
import Event from '../../utility/event/Event';
import Record from '../../utility/record/Record';
// Types
import { home } from './definition';
import { profile } from '../../definititon';

function Home(props: home) {
    // const subscriptionPrice = 10;
    const info = props.info;

    //#region Props
    const getRecordProps = (profile: profile) => {
        //#region Turnary Media Handling
        let mediaUrl = '';
        let mediaPlaying = false;
        if(profile.media)  {   // Does this profile infact have media?
            mediaUrl = profile.media[0].url;   // Set the song url
            mediaPlaying = profile.media[0].isPlaying; // Set isPlaying for visual feedback aka record spins
        }
        //#endregion Turnary Media Handling
        return {
            url: mediaUrl,
            isPlaying: mediaPlaying,
            profile: profile,
            mediaIndex: 0,
            cover: true
        }
    }

    const eventProps = {
        info: {...info.nextEvent},
        toggleProfile: props.toggleProfile
    }
    //#endregion Props
    
    const subscribe = () => {

    }
    
    return (
        <>
            <Banner />
            <h1 className='nextEvent'>Next Event</h1>
            <Event {...eventProps}/>

            <div className='monthly'>
                <h1 className='monthly__title'>Artist of the Month</h1>
                <div className='monthly__record__container'>
                    <Record {...getRecordProps(info.monthlyMusician)}/>
                </div>
            </div>

            <div className='featured'>
                <h1 className='featured__title'>Featured Artists</h1>
                <div className='featured__container'>
                    {
                        info.featuredBusinesses.map((business, i) => (
                            <div key={i}>
                                <Record {...getRecordProps(business)} />
                            </div>
                        ))
                    }
                </div>
                <div className='featured__btn__container'>
                    <button onClick={() => subscribe()}className='featured__btn'>Feature your Business</button>
                </div>
            </div>
        </>
    )
}

export default Home;