import './styles.scss';

// Types
import { content, data, mediaInfo, monthlyData, profileManager } from '../../definititon';
// Components
import Media from '../../utility/media/Media';

function Profile(props: profileManager) {
    const info = props.business;
    const profile = info.profile;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const name: string = e.target[0].value.length > 0 ? e.target[0].value : info.profile.name;
        const email: string = e.target[2].value.length > 0 ? e.target[2].value : info.profile.email;
        const bio: string = e.target[3].value.length > 0 ? e.target[3].value : info.profile.bio != undefined ? info.profile.bio : '';

        if(email.length > 0) {
            console.log("Handle email change");
        }

        console.log(props.business);
        props.editBusiness({
            ...props.business,
            profile: {
                ...info.profile,
                name: name,
                email: email,
                bio: bio
            }
        })
    }

    const editMedia = (e: any, index: number) => {
        let updatedMedia = [...profile.media];
        updatedMedia[index].url = e.target.value;

        updateMedia(updatedMedia);
    }

    // Initialize an empty media to edit
    const addMedia = (type: content) => {
        let updatedMedia = [...profile.media];
        const date = new Date();

        updatedMedia.push({
            index: updatedMedia.length,
            dateCreated: date,
            type: type,
            url: '',
            isPlaying: false,
            likes: {
                total: 0,
                history: [{
                    year: date.getUTCFullYear(),
                    monthlyData: {} as monthlyData
                }]
            } as data
        });

        updateMedia(updatedMedia);
    }

    const delMedia = (index: number) => {
        let updatedMedia = [...profile.media];
        updatedMedia.splice(index, 1);
        updateMedia(updatedMedia);
    }

    const updateMedia = (updatedMedia: mediaInfo[]) => {
        props.editBusiness({
            ...props.business,
            profile: {
                ...profile,
                media: updatedMedia
            }
        })
    }

    const editSocialMedia = (e: any, index: number) => {
        let updatedSocialMedia = [...profile.socialMedia];

        updatedSocialMedia[index].url = e.target.value;

        props.editBusiness({
            ...props.business,
            profile: {
                ...profile,
                socialMedia: updatedSocialMedia
            }
        })
    }

    return (
        <div className='settings'>
            <div className='settings__header'>
                <div className='settings__profilePic__container'>
                    <img className='settings__profilePic' src={info.profile.picture ? info.profile.picture : 'images/artist-logos/sleepy-eyes.png'} />
                    <div className='settings__profilePic__imageUpload'>
                        <input type="file" style={{color: 'white'}}/>
                    </div>
                </div>

                <form onSubmit={(e) => handleSubmit(e)} className='settings__form'>
                    <input type='text' placeholder={profile.name} className='settings__form__input' id='profile__name'/>
                    
                    <input type='email' placeholder={profile.email} className='settings__form__input' />
                    
                    <textarea placeholder={profile.bio} id='textarea' className='settings__form__input' />
                    <button className='settings__form__btn' type='submit'>Submit Changes</button>
                </form>
            </div>

            <div className='settings__media__container'>
                {
                    profile.media.map((media, i) => (
                        <div key={i} className='settings__media'>
                            <Media {
                                ... {
                                    profile: {...profile},
                                    info: {...media},
                                    playSong: props.playSong,
                                    addData: props.addData,
                                    delData: props.delData

                                }
                            }/>
                            {/* url changer */}
                            {
                                <div className='settings__media__input__container'>
                                    <input onChange={(e) => editMedia(e, i)} className='settings__media__input' placeholder={media.url} />
                                    {
                                        media.type == 'image' ?
                                            // This will need an upload feature that talks to the db 
                                            <img src={media.url} />
                                        : null
                                    }
                                </div>
                            }
                            <button onClick={() => delMedia(i)} className='settings__media__btn'>-</button>
                        </div>
                    ))
                }
                <button onClick={() => addMedia('song')} className='settings__media__btn__add'>+</button>
            </div>

            <div id='socialMedia__container' className='socialMedia__container'>
                    {profile.socialMedia.map((social, i) => (
                        <div key={i}className='settings__socialMedia'>
                            <img id='socialMedia__logo' className='socialMedia__logo' title={social.type} src={`/images/social/${social.type}.png`} />
                            <input className='settings__socialMedia__input' type='text' placeholder={social.url} onChange={(e) => editSocialMedia(e, i)} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Profile;