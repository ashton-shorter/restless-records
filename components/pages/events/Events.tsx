import './styles.scss';

import { events } from './definition';
import Event from '../../utility/event/Event';


function Events(props: events) {
    const info = props.info;
    const filterOptions = ['Age 18+', 'Age 21+', 'hiring'];

    const getFilterStyles = (filter: string) => {
        let styles = 'events__header__filter';

        if(info.activeFilters.includes(filter)) {
            styles = 'events__header__filter__active'
        }

        return styles;
    }

    return (
        <>
            <div className='events__header'>
                <div className='events__header__search__container'>
                    <input className='events__header__search' onChange={(e) => props.updateEvents(e.target.value, undefined)} placeholder='Search...' />
                </div>

                <div className='events__header__filter__container'>
                    <div className='events__header__filter__options'>
                    {
                        filterOptions.map((filter, i) => (
                            <button
                                key={i}
                                onClick={() => props.updateEvents(undefined, [...info.activeFilters, filter])}
                                className={getFilterStyles(filter)}
                            >{filter}</button>
                        ))
                    }
                    </div>
                </div>
            </div>
        
            <div className='events'>
                {
                    info.filteredEvents.map((event, i) => (
                        <Event key={i} {...{
                            info: {
                                ...event
                            },
                            toggleProfile: props.toggleProfile
                        }} />
                    ))
                }
            </div> 
        </>
    )
}

export default Events;