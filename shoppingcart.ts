import { Item } from './item';

export class ShoppingCart<T extends Item> {

    constructor(private items: T[]) {}

    addItem(item: T) {
        this.items.push(item);
    }

    getTaxes() : number {
        let taxes : number = 0;
        this.items.forEach(item => taxes += (item.price *.09));
        return taxes;
    }

    getSubTotal() : number {
        let subTotal : number = 0;
        this.items.forEach(item => subTotal += item.price);
        return subTotal;
    }

    getTotal() : number {
        return this.getSubTotal() + this.getTaxes();
    }

    listItems() : void {
        this.items.forEach((item, index) => {
            let num = index + 1;
            console.log(num + ') ' + item.name + ' price: ' + item.price );
        })
    }

}