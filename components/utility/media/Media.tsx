import './styles.scss';
// Components
import Record from '../record/Record';
// Types
import { media } from './definition';
// Mui Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Media(props: media) {
    const info = props.info;
    const displayMedia = () => {
        switch(info.type) {
            case 'image':
                return (
                    <img className='media__image' src={info.url} />
                )
            case 'song':
                let songName = info.url;
                songName = songName.substring(songName.lastIndexOf('/') + 1);
                songName = songName.toUpperCase();
                const recordProps = {
                    url: info.url,
                    isPlaying: info.isPlaying, 
                    profile: props.profile,
                    mediaIndex: info.index,
                    cover: false,
                }
                return (
                    <>
                        <div className='play__container'>
                            {
                                !info.isPlaying ? (
                                    <PlayArrowIcon style={{transition: 'all .3s'}}fontSize='large' className='play' onClick={() => props.playSong(info.url, props.profile, info.index)} />
                                ) : <PauseIcon fontSize='large' className='play' onClick={() => props.playSong('', props.profile, info.index)} />
                            }
                            
                        </div>
                        <Record {...recordProps} />
                        <h1 className='songName'>{songName}</h1>
                    </>
                )
            case 'video':
                return (
                    <>
                        <video><source src={info.url}/></video>
                    </>
                )
        }
    }

    return (
        <>
            {displayMedia()}
            <div className='likes'>
                <FavoriteIcon fontSize='large' className='likes__heart' onClick={() => props.addData(props.profile, info.index)} />
                <p className='likes__total'>{info.likes.total}</p>
            </div>
        </>
    )
}

export default Media;