/**
 * Variables
 */
// let firstName : string = "Noah";
// console.log("firstName = " + firstName);
// let isIceCreamGood: boolean = true;
// console.log("boolean = " + isIceCreamGood);
// let age : number = 30;
// console.log("number = " + age);
// let names : string[];
// names = ["Cameron","Noah", "Amy", "John"];
// let lastNames : Array<string> = ["Glaser", "Smith", "Kim"];
// console.log("Array of string");
// console.log(lastNames);
// let weirdTuple : [number, string];
// weirdTuple = [10, 'blue moo'];
// weirdTuple.push("Noah");
// console.log("Weird Tuple: ");
// console.log(weirdTuple);
// enum Places { Austin, "San Deigo", Nashville = 105, Dallas };
// console.log("Printing Nashville : " + Places.Nashville)
// console.log("Printing Austin : " + Places.Austin)
// console.log("Print the string of emum: " + Places[Places.Austin]);
/**
 * Functions
 */
//First Function Example
// function addTwoNumber(num1: number, num2: number) : number {
//     return num1 + num2;
// }
// let sum = addTwoNumber(42, 32.22);
// console.log(sum);
//Functions with types
// function logSomething(message: string) : void {
//     console.log(message);
// }
// let logger : (message: string) => void;
// logger = logSomething;
// logger("I a logging");
// let total : (num1: number, num2: number) => number;
// total = addTwoNumber;
// console.log(total(2, 3));
/**
 * Arrow Functions
 */
// let lotterNums = [32,12,23,41,32];
// let lotterNumsOver20 = lotterNums.filter(num => num > 20);
// console.log(lotterNumsOver20);
// lotterNums.forEach((value, index, arr) => {
//     console.log("Value => " + value);
//     console.log("Index => " + index);
// });
// function example() {
//     this.numberOfApples = 12;
//     setTimeout(() => {
//         console.log(this.numberOfApples);
//     }, 400);
// }
// example();
/**
 * Export / Import modules
 */
// import { names } from './listOfPeople';
// console.log(names);
/**
 * Interface
 */
// import { BearInterface } from './bear.interface';
// let bears: BearInterface[] = []
// bears.push({
//     legs: 2,
//     furr: "red",
//     roar: () => {
//         console.log("ROAR ROAR, CLAW!!");
//     },
//     isPredator: true
// });
// let bear2 : BearInterface = {
//         legs: 2,
//         furr: "blue",
//         roar: () => {
//             console.log("ROAR ROAR ROAR, CLAW!!");
//         },
//         isPredator: true
// };
// bears.push(bear2);    
// function bearPower(bears: BearInterface[]) : void {
//     bears.forEach((bear) => {
//         bear.roar();
//     });
// }
// bearPower(bears);
/**
 * Classes
 */
// import { PolarBear } from './polarbear';
// import { Person } from './person';
// import { Apple } from './apple';
// import { Fruit } from './fruit';
// let bearMan = new PolarBear();
// let Thomas = new Person();
// Thomas.nickName;
// // Thomas.name;
// // Thomas.address;
// let redApple = new Apple('red', 'large', 'Apple Tree');
// function logTypeOfFruitPlan(fruit: Fruit) : void {
//     console.log(fruit.getPlantType());
// }
// logTypeOfFruitPlan(redApple);
/**
 * Generics
 */
// import { ShoppingCart } from './shoppingcart';
// import { Item } from './item';
// let items : Item[] = [
//     {name: 'bread', price: 2.99},
//     {name: 'mustard', price: 1.29},
//     {name: 'pickles', price: 1.53}
// ];
// let cart = new ShoppingCart(items);
// cart.addItem({name: 'soap', price: 4.99});
// cart.listItems();
// console.log("Taxes: " +cart.getTaxes());
// console.log("SubTotal: " +cart.getSubTotal());
// console.log("Total: " +cart.getTotal());
/// <reference path="typings/index.d.ts" />
// import * as _ from 'lodash';
// console.log(_.snakeCase('what is up'));
//# sourceMappingURL=app.js.map