import { profile } from "../../definititon";
import { businessType } from '../../definititon';

export type eventInfo = {
    musicians: profile[];
    vendors: profile[];

    name: string;
    company: string;
    bio: string;
    image: string;

    venue: string;
    address: string;
    date: Date;
    doors: number;

    price: number;
    paymentUrl: string; // = "" ? done through me(stripe) : the client's url
    hiring: businessType[];

    ageRestriction?: number;
}

export type event = {
    info: eventInfo;
    toggleProfile(profile?: profile): void;
}

export type eventsInfo = {
    filteredEvents: eventInfo[];
    activeFilters: string[];
    currentSearch: string;
}

export type events = {
    info: eventsInfo;
    toggleProfile(profile?: profile): void;
    addEvent(event: eventInfo): void;
    delEvent(index: number): void;
    updateEvents(phrase?: string, updatedFilters?: string[]): void;
}