import { AnimalInterface } from './animal.interface';

export interface BearInterface extends AnimalInterface {
    roar: () => void
    furr: string;
}