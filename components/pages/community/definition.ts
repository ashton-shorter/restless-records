import { data, profile } from '../../definititon';

export type businessType = 
    // Talent
    'artist' | 'musician' | 'performer' | 'vendor' |
    // Staff
    'bartender' | 'security' | 'stagehand';

export type businessInfo = {
    profile: profile;
    views: data;    // Type Data to provide analytics
    types: businessType[];
    eventsWorked: number;
    upcomingEvents: string[];
}

export type business = {
    info: businessInfo;
    addEvent(name: string): void;
    delEvent(index: number): void;
}

export type communityInfo = {
    filteredBusinesses: businessInfo[];
    allFilters: businessType[];
    activeFilters: businessType[];
    currentSearch: string;
    sortBy: sort;
}

export type community = {
    info: communityInfo;
    playSong(url: string, profile: profile, mediaIndex: number): void;
    toggleProfile(profile?: profile): void;
    // Adding Likes and Views
    addData(profile: profile, mediaIndex: number): void;
    delData(profile: profile, mediaIndex: number): void;
    updateFilteredBusinesses(phrase?: string, updatedFilters?: businessType[], updatedSort?: sort): void;
}

export type sort = '' | 'likes' | 'newest' | 'oldest';