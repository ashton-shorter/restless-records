import { eventInfo, profile } from '../../definititon';

export type homeInfo = {
    nextEvent: eventInfo;
    monthlyMusician: profile;
    featuredBusinesses: profile[];
}

export type home = {
    info: homeInfo;
    playSong(url: string, profile: profile, mediaIndex: number): void;
    toggleProfile(profile?: profile): void;
}