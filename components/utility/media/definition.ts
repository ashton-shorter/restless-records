import { Data } from "../../definititon";

export type Content = 'Image'|  'Video' | 'Song'

export type Media = {
    dateCreated: Date;  // useful for listing new content
    type: Content;
    url: string;    // can be an image, song, or video
    likes: Data;
}

export type SocialMedia = {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    soundcloud?: string;
    website?: string;
    youtube?: string;
}
