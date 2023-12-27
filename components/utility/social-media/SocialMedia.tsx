import './styles.scss';
// Types
import { social } from './definition';

function SocialMedia(props: social) {
    console.log({props});
    return (
        <div className='socialMedia__container'>
            {props.socialMedia.map((social, i) => (
                social.url !== '' ? 
                    <a key={i} target="_blank" rel="noopener noreferrer" href={social.url}>
                        <img className='socialMedia__logo' title={social.type} src={`/images/social/${social.type}.png`} />
                    </a>
            : null))}
        </div>
    )
}

export default SocialMedia;