export abstract class Fruit {

    constructor(protected plant: string) {}

    getPlantType() : string {
        return this.plant;
    }
}