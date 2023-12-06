import { profile } from "../../definititon";

export type content = 'image'|  'video' | 'song';
export type socialType = 'facebook' | 'instagram' | 'twitter' | 'soundcloud' | 'website' | 'youtube';

export type mediaInfo = {
    index: number;
    dateCreated: Date;  // useful for listing new content
    type: content;
    url: string;    // can be an image, song, or video
    isPlaying: boolean;
    profile: profile;
    // likes: Data;
}

export type media = {
    info: mediaInfo;
    playSong(url: string, profile: profile, mediaIndex: number): void;
}

export type socialMedia = {
    type: socialType;
    url: string;
}