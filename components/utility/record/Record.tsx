import './styles.scss';
// Types
import { record } from './definition';

function Record(props: record) {
    const displayRecord = () => {
        if(props.isPlaying) {
            return (
                <>
                    { props.cover ? 
                        <>
                            <div className='cover__container' style={{left: '28px'}}>
                                {/* <img className='cover' src={info.profile.picture ? info.profile.picture : 'images/artist-logos/sleepy-eyes.png'}/> */}
                                {/* <div className='play__container'>
                                    <PauseIcon style={{left: '190px', top: '185px'}} fontSize='large' className='play' onClick={() => props.playSong('', info.profile, info.mediaIndex)} />
                                </div> */}
                                <div id='rotate' className='record' style={{left: '50px', top: '45px'}}/>
                            </div>
                            
                        </>
                    : 
                        <>
                            <div className='record__container'>
                                <div id='rotate' className='record' />
                            </div>
                            {/* <div className='play__container'>
                                <PauseIcon fontSize='large' className='play' onClick={() => props.playSong('', info.profile, info.mediaIndex)} />
                            </div> */}
                        </>
                    }
                </>
            )
        }

        return (
            <>
                { props.cover ? 
                    <>
                        <div className='cover__container' style={{left: '28px'}}>
                            <img className='cover' src={props.profile.picture ? props.profile.picture : 'images/artist-logos/sleepy-eyes.png'}/>
                            {/* <div className='play__container'>
                                <PlayArrowIcon style={{left: '190px', top: '185px'}} fontSize='large' className='play' onClick={() => props.playSong(info.url, info.profile, info.mediaIndex)} />
                            </div> */}
                            <div className='record' style={{left: '50px', top: '45px'}}/>
                        </div>
                        
                    </>
                : 
                    <> 
                        <div className='record__container'>
                            <div className='record' />
                        </div>
                    </>
                }
            </>
        )
    }
    
    return ( <> { displayRecord() } </> )
}

export default Record;