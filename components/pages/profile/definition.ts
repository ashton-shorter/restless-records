import { mediaInfo, socialMedia } from "../../definititon";

export type profile = {
    name: string;
    picture?: string;
    bio?: string;
    media: mediaInfo[]; 
    socialMedia?: socialMedia[];
    // cardBalance: number;    // gift card balance
}