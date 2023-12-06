import './styles.scss';
import React from 'react';

import { events } from './definition';
import Event from '../../utility/event/Event';


function Events(props: events) {
    return (
        <>
            {
                props.events.map((event, i) => (
                    <Event {...event} />
                ))
            }
        </> 
    )
}

export default Events;