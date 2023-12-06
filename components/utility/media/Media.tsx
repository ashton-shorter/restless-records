import './styles.scss';
// Components
import Record from '../record/Record';
// Types
import { media } from './definition';

function Media(props: media) {
    const info = props.info;
    const displayMedia = () => {
        switch(info.type) {
            case 'image':
                return (
                    <>
                        <img src={info.url} />
                    </>
                )
            case 'song':
                const recordProps = {
                    info: {
                        url: info.url,
                        isPlaying: info.isPlaying, 
                        profile: info.profile,
                        mediaIndex: info.index,
                        cover: false,
                    },
                    playSong: props.playSong
                }
                return (
                    <>
                        <Record {...recordProps} />
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
            {/* <img src='images/utility/full-heart.png'>{info.likes.total}</img> */}
        </>
    )
}

export default Media;