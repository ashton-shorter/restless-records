import { businessInfo } from '../../definititon';

export type loginInfo = {
    display: boolean;
    signUp: boolean;
    isLoggedIn: boolean;
    totalUsers: number;    // Used to determine ID of new users
    business: businessInfo
}

export type login = {
    info: loginInfo;
    toggleDisplay():void;
    toggleSignUp(): void;
    setIsLoggedIn(isLoggedIn: boolean, email: string): void;
    getUserCount(): number;
}