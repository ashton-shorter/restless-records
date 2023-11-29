import { Media, SocialMedia } from "../../definititon";

export type Profile = {
    name: string;
    picture?: string;
    bio?: string;
    media?: Media[]; 
    socialMedia?: SocialMedia;
    // cardBalance: number;    // gift card balance
}