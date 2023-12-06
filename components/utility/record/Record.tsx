import './styles.scss';
// Types
import { record } from './definition';
// Mui Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function Record(props: record) {
    const info = props.info;
    console.log(info.isPlaying);
    const displayRecord = () => {
        if(info.isPlaying) {
            return (
                <>
                    { info.cover ? 
                        <>
                            <div className='cover__container' style={{left: '28px'}}>
                                {/* <img className='cover' src={info.profile.picture ? info.profile.picture : 'images/artist-logos/sleepy-eyes.png'}/> */}
                                <div className='play__container'>
                                    <PauseIcon style={{left: '190px', top: '185px'}} fontSize='large' className='play' onClick={() => props.playSong(info.url, info.profile, info.mediaIndex)} />
                                </div>
                                <div id='rotate' className='record' style={{left: '50px', top: '45px'}}/>
                            </div>
                            
                        </>
                    : 
                        <>
                            <div id='rotate' className='record' />
                            <div className='play__container'>
                                <PauseIcon fontSize='large' className='play' onClick={() => props.playSong(info.url, info.profile, info.mediaIndex)} />
                            </div>
                        </>
                    }
                </>
            )
        }

        return (
            <>
                { info.cover ? 
                    <>
                        <div className='cover__container' style={{left: '28px'}}>
                            <img className='cover' src={info.profile.picture ? info.profile.picture : 'images/artist-logos/sleepy-eyes.png'}/>
                            <div className='play__container'>
                                <PlayArrowIcon style={{left: '190px', top: '185px'}} fontSize='large' className='play' onClick={() => props.playSong(info.url, info.profile, info.mediaIndex)} />
                            </div>
                            <div className='record' style={{left: '50px', top: '45px'}}/>
                        </div>
                        
                    </>
                : 
                    <> 
                        <div className='play__container'>
                            <PlayArrowIcon fontSize='large' className='play' onClick={() => props.playSong(info.url, info.profile, info.mediaIndex)} />
                        </div>
                        <div className='record' />
                    </>
                }
            </>
        )
    }
    
    return ( <> { displayRecord() } </> )
}

export default Record;