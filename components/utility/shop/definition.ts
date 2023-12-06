import { profile } from '../../definititon';

export type item = {
    name: string;
    bio: string;
    image: string;
    price: number;
    email: string;
    seller: profile;
}

export type shop = {
    items: item[];
    addItem(item: item): void;
    delItem(index: number): void;
}