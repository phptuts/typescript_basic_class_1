"use strict";
var ShoppingCart = (function () {
    function ShoppingCart(items) {
        this.items = items;
    }
    ShoppingCart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ShoppingCart.prototype.getTaxes = function () {
        var taxes = 0;
        this.items.forEach(function (item) { return taxes += (item.price * .09); });
        return taxes;
    };
    ShoppingCart.prototype.getSubTotal = function () {
        var subTotal = 0;
        this.items.forEach(function (item) { return subTotal += item.price; });
        return subTotal;
    };
    ShoppingCart.prototype.getTotal = function () {
        return this.getSubTotal() + this.getTaxes();
    };
    ShoppingCart.prototype.listItems = function () {
        this.items.forEach(function (item, index) {
            var num = index + 1;
            console.log(num + ') ' + item.name + ' price: ' + item.price);
        });
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
//# sourceMappingURL=shoppingcart.js.map