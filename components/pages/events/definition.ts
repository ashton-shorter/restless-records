import { profile } from "../../definititon";
import { businessType } from '../../definititon';

export type eventInfo = {
    musicians: profile[];
    vendors: profile[];

    name: string;
    subTitle: string;
    bio: string;
    image: string;

    venue: string;
    address: string;
    date: Date;
    doors: number;

    price: number;
    paymentUrl: string; // = "" ? done through me(stripe) : the client's url
    hiring: businessType[];
}

export type event = {
    info: eventInfo;
    toggleProfile(profile?: profile): void;
}

export type events = {
    events: event[];
    toggleProfile(profile?: profile): void;
    addEvent(event: Event): void;
    delEvent(index: number): void;
}