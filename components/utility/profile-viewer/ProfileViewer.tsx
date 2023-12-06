import './styles.scss';
// Types
import { profileViewer } from './definition';
// Components
import Media from '../../utility/media/Media';

function ProfileViewer(props: profileViewer) { 
    const info = props.info;
    const profile = info.profile;

    const displayMedia = () => {
        if(profile.media) {
            let mediaProps = {
                info: {
                    ...profile.media[info.mediaIndex],
                    index: info.mediaIndex,
                    profile: info.profile,
                },
                playSong: props.playSong
            };
            return (
                <>
                    <Media {...mediaProps} />
                    {
                        profile.media.length > 1 ?
                            <div className='profile__media__stepper'>
                                <button className='profile__media__stepper__btn' onClick={() => props.setMediaIndex(info.mediaIndex - 1)}>L</button>
                                <button className='profile__media__stepper__btn' onClick={() => props.setMediaIndex(info.mediaIndex + 1)}>R</button>
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
                <button onClick={() => props.toggleProfile()} className='profile__close'>x</button>
                <img className='profile__pic' src={profile.picture} />
                <h1 className='profile__name'>{profile.name}</h1>
                <p className='profile__bio'>{profile.bio}</p>
                <div className='profile__social__media'>
                    {
                        profile.socialMedia?.map((social, i) => (
                            <a key={i} target="_blank" rel="noopener noreferrer" href={social.url}>
                                <img className='profile__social__media__logo' src={`/images/social/${social.type}.png`} />
                            </a>
                        ))
                    }
                </div>

                <div className='profile__media'>
                    {displayMedia()}
                </div>
            </div>
        </div> 
    )
}

export default ProfileViewer;