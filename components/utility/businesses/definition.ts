import { profile } from '../../definititon';

export type businessType = 
    // Talent
    'Artist' | 'Musician' | 'Performer' | 'Vendor' |
    // Staff
    'Bartender' | 'Security' | 'Stagehand';

export type businessInfo = {
    profile: profile;
    // views: Data;    // Type Data to provide analytics
    type: businessType;
    eventsWorked: number;
    upcomingEvents: string[];
}

export type business = {
    info: businessInfo;
    addEvent(name: string): void;
    delEvent(index: number): void;
}