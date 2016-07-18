import { Fruit } from './fruit';

export class Apple extends Fruit {

    constructor(protected color: string, private size: string, plant: string) {
        super(plant);
    }



}