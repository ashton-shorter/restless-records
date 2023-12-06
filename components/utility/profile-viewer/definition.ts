import { profile } from '../../definititon';

export type profileViewerInfo = {
    profile: profile;
    isPlaying: boolean;
    mediaIndex: number;
}

export type profileViewer = {
    info: profileViewerInfo;
    setMediaIndex(index: number): void;
    toggleProfile(profile?: profile): void;
    playSong(url: string, profile: profile, mediaIndex: number): void;
}