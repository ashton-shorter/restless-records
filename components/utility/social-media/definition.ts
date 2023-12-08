export type socialType = 'facebook' | 'instagram' | 'twitter' | 'soundcloud' | 'website' | 'youtube';
export type socialMedia = {
    type: socialType;
    url: string;
}

export type social = {
    socialMedia: socialMedia[];
}