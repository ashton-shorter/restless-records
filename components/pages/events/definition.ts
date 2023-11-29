import { Profile } from "../../definititon";
import { BusinessType } from '../../definititon';

export type Event = {
    artists: Profile[];
    vendors: Profile[];

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
    hiring: BusinessType[];
}

export type Events = {
    events: Event[];
    addEvent(event: Event): void;
    delEvent(index: number): void;
}