import './styles.scss';
// Types
import { profileViewer } from './definition';
// Components
import Media from '../../utility/media/Media';
import SocialMedia from '../../utility/social-media/SocialMedia';
// Mui Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function ProfileViewer(props: profileViewer) { 
    const info = props.info;
    const profile = info.profile;

    const displayMedia = () => {
        if(profile.media) {
            // Get the name of the song
            let mediaProps = {
                profile: profile,
                info: {
                    ...profile.media[info.mediaIndex],
                    index: info.mediaIndex,
                    profile: info.profile,
                },
                playSong: props.playSong,
                addData: props.addData,
                delData: props.delData
            };
            return (
                <>
                    <Media {...mediaProps} />
                    
                    {
                        profile.media.length > 1 ?
                            <div className='profile__media__stepper'>
                                { info.mediaIndex - 1 >= 0 ?
                                    <ChevronLeftIcon
                                        className='profile__media__stepper__btn'
                                        onClick={() => props.setMediaIndex(info.mediaIndex - 1)}
                                        sx={{fontSize: '5vw', position: 'relative', left: '-25px', transition: 'all .5s'}}
                                    />
                                :   <ChevronLeftIcon
                                        className='profile__media__stepper__btn'
                                        onClick={() => props.setMediaIndex(info.mediaIndex - 1)}
                                        sx={{visibility: 'hidden', fontSize: '5vw', position: 'relative', left: '-25px', transition: 'all 0s'}}
                                    />
                                }

                                { info.mediaIndex + 1 < profile.media.length ?
                                    <ChevronRightIcon
                                        className='profile__media__stepper__btn'
                                        onClick={() => props.setMediaIndex(info.mediaIndex + 1)}
                                        sx={{fontSize: '5vw', position: 'relative', left: '25px', transition: 'all .5s'}}
                                        />
                                :   <ChevronRightIcon
                                        className='profile__media__stepper__btn'
                                        onClick={() => props.setMediaIndex(info.mediaIndex + 1)}
                                        sx={{visibility: 'hidden', fontSize: '5vw', position: 'relative', left: '25px', transition: 'all 0s'}}
                                    />
                                }
                            </div>
                        : null
                    } 
                </>
            )
        }
    }

    return (
        <div className='profile__container'>
            <div className='profile'>
                <h1 className='profile__name'>{profile.name}</h1>
                <button onClick={() => props.toggleProfile()} className='profile__close'>x</button>
                <img className='profile__pic' src={profile.picture ? profile.picture : '/images/artist-logos/sleepy-eyes.png'} />
                
                <div className='profile__bio__container'>
                    <p className='profile__bio'>{profile.bio}</p>
                </div>
                
                <div className='profile__social__media'>
                    <SocialMedia {...{socialMedia: props.info.profile.socialMedia}} />
                </div>

                <div className='profile__media'>
                    {displayMedia()}
                </div>

                <button className='profile__nextEvent'>Next Event</button>
            </div>
        </div> 
    )
}

export default ProfileViewer;