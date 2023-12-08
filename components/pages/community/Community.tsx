import './styles.scss';

// Types
import { community } from './definition';
// Components
import Media from '../../utility/media/Media';

// I only want to display the latest media for each business because it can start to get too repetitive. View the profile to view more media
// but what if the business wants to display different kinds of things?
// e.g. they dj, fire spin, and bartend
// Then they will be listed in the filtered search, and on their profile
function Community(props: community) {
    const info = props.info;
    

    const displayBusinesses = () => {
        let businesses = [...info.businesses];
        if(info.filters.length > 0) {   // Are there any active filters?
            // Exclude any businesses that dont match the filters
            businesses.forEach((business, i) => {
                const filterMatch = business.types.filter(match => info.filters.includes(match));
                if(!filterMatch) {
                    console.log("Filter did not match, excluding: " + business.profile.name)
                    businesses.splice(i, 1);
                }
            })
        }

        // Properly sort the businesses to display
        switch(info.sortBy) {
            case 'likes': {
                businesses = businesses.sort((a, b) =>
                a.profile.media[a.profile.media.length-1].likes.total
                - b.profile.media[b.profile.media.length-1].likes.total).reverse();
                break;
            }
            case 'newest': {
                businesses = businesses.sort((a, b) => a.profile.media[0].dateCreated.getTime() - b.profile.media[0].dateCreated.getTime()).reverse();
                break;
            }
            case 'oldest': {
                businesses = businesses.sort((a, b) => a.profile.media[0].dateCreated.getTime() - b.profile.media[0].dateCreated.getTime());
                break;
            }
        }

        return businesses;
    }

    return (
        <div className='community'>
            {
                displayBusinesses().map((business, i) => (
                    
                    <div className='business' key={i}>
                        <h1 className='business__name' onClick={() =>  props.toggleProfile(business.profile)}>{business.profile.name}</h1>
                        <div className='business__media'>
                            <Media {
                                ...{
                                    profile: business.profile,
                                    info: {...business.profile.media[business.profile.media.length -1]},
                                    playSong: props.playSong,
                                    addData: props.addData,
                                    delData: props.delData
                                }
                            } />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Community;