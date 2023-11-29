import { Profile } from '../../definititon';

export type Item = {
    name: string;
    bio: string;
    image: string;
    price: number;
    email: string;
    seller: Profile;
}

export type Shop = {
    items: Item[];
    addItem(item: Item): void;
    delItem(index: number);
}