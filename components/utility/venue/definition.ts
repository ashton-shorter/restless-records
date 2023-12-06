import { events, socialMedia } from "../../definititon";

export type venue = {
    name: string;
    image: string;
    address: string;
    events: events;
    socialMedia?: socialMedia;
}