import { Data, Profile } from '../../definititon';

export type BusinessType = 
    // Talent
    'Artist' | 'Musician' | 'Performer' | 'Vendor' |
    // Staff
    'Bartender' | 'Security' | 'Stagehand';

export type Business = {
    profile: Profile;
    views: Data;    // Type Data to provide analytics
    type: BusinessType;
    eventData: EventData;
}

export type EventData = {
    eventsWorked: number;
    upcomingEvents: string[];
    addEvent(name: string);
    delEvent(index: number);
}