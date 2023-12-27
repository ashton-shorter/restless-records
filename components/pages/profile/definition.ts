import { mediaInfo, socialMedia, businessInfo } from "../../definititon";

export type profile = {
    name: string;
    email: string;
    picture?: string;
    bio?: string;
    media: mediaInfo[]; 
    socialMedia: socialMedia[];
    // cardBalance: number;    // gift card balance
}

export type profileManager = {
    business: businessInfo;
    editBusiness(updatedBusiness: businessInfo): void;
    playSong(url: string, profile: profile, mediaIndex: number): void;
    // Adding/Deleting Likes
    addData(profile: profile, mediaIndex: number): void;
    delData(profile: profile, mediaIndex: number): void;
}