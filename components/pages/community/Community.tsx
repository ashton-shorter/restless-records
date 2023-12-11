import './styles.scss';
// Types
import { businessType, community, sort } from './definition';
// Components
import Media from '../../utility/media/Media';

// I only want to display the latest media for each business because it can start to get too repetitive. View the profile to view more media
// but what if the business wants to display different kinds of things?
// e.g. they dj, fire spin, and bartend
// Then they will be listed in the filtered search, and on their profile
function Community(props: community) {
    const info = props.info;
    const sortOptions = ['likes', 'newest', 'oldest'];

    // Reflect active filters and sorting in styles
    const getFilterStyles = (filter: businessType) => {
        let styles = 'community__header__filter';

        if(info.activeFilters.includes(filter)) {
            styles = 'community__header__filter__active'
        }

        return styles;
    }

    const getSortStyles = (sort: sort) => {
        let styles = 'community__header__filter__sort';

        if(info.sortBy == sort) {
            styles = 'community__header__filter__sort__active'
        }

        return styles;
    }

    return (
        <div className='community'>
            <div className='community__header'>
                <div className='community__header__search__container'>
                    <input className='community__header__search' onChange={(e) => props.updateFilteredBusinesses(e.target.value, undefined, undefined)} placeholder='Search...' />
                </div>

                <div className='community__header__filter__container'>
                    <div className='community__header__filter__options'>
                    {
                        info.allFilters.map((filter, i) => (
                            <button
                                key={i}
                                onClick={() => props.updateFilteredBusinesses(undefined, [...info.activeFilters, filter as businessType], undefined)}
                                className={getFilterStyles(filter)}
                            >{filter}</button>
                        ))
                    }
                    </div>

                    <div className='community__header__filter__sort__options'>
                        {
                            sortOptions.map((sort, i) => (
                                <button
                                key={i}
                                    onClick={() => props.updateFilteredBusinesses(undefined, undefined, sort as sort)}
                                    className={getSortStyles(sort as sort)}
                                >{sort}</button>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='community__businesses'>
                {
                    info.filteredBusinesses.map((business, i) => (
                        
                        <div className='community__businesses__business' key={i}>
                            <h1 className='community__businesses__business__name' onClick={() =>  props.toggleProfile(business.profile)}>{business.profile.name}</h1>
                            <div className='community__businesses__business__media'>
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
        </div>
    )
}

export default Community;