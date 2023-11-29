import { Events, SocialMedia } from "../../definititon";

export type Venue = {
    name: string;
    image: string;
    address: string;
    events: Events;
    socialMedia?: SocialMedia;
}