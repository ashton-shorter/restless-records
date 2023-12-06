import { profile } from "../../definititon";

export type recordInfo = {
    url: string;
    isPlaying: boolean;
    profile: profile;
    mediaIndex: number;
    cover: boolean;
}

export type record = {
    info: recordInfo;
    playSong(url: string, profile: profile, mediaIndex: number): void;
}