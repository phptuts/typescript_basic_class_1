import { BearInterface } from './bear.interface';

export class PolarBear implements BearInterface {

    legs: number = 2;

    furr: string = 'white';

    isPredator: boolean = true;
    
    roar() {
        console.log("ROAR, I am a polar bear.");
    }
    
}