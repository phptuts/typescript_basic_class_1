import { Person } from './person';

export class Employee extends Person {

    whatIsMyName() : void {
        console.log("My name is : " + this.name);
    }
}