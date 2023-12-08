import { data, profile } from "../../definititon";

export type content = 'image'|  'video' | 'song';


export type mediaInfo = {
    index: number;
    dateCreated: Date;  // useful for listing new content
    type: content;
    url: string;    // can be an image, song, or video
    isPlaying: boolean;
    likes: data;
}

export type media = {
    profile: profile;
    info: mediaInfo;
    playSong(url: string, profile: profile, mediaIndex: number): void;
    // Adding/Deleting Likes
    addData(profile: profile, mediaIndex: number): void;
    delData(profile: profile, mediaIndex: number): void;
}