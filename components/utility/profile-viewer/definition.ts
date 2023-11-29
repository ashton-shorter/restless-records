import { Profile } from '../../definititon';

export type ProfileView = {
    display: boolean;
    profile: Profile;
    toggleDisplay(): void;
}